# Documentação de Modificações - Tasklist Backend

## 📋 Índice
1. [Visão Geral](#1-visão-geral)
2. [Correções de Compilação](#2-correções-de-compilação)
3. [Configuração de Segurança](#3-configuração-de-segurança)
4. [Configuração de Banco de Dados](#4-configuração-de-banco-de-dados)
5. [Refatoração de Controladores](#5-refatoração-de-controladores)
6. [Resumo das Mudanças](#6-resumo-das-mudanças)

---

## 1. Visão Geral

Este documento detalha todas as modificações realizadas no projeto **Tasklist Backend**, uma aplicação Spring Boot que implementa uma API RESTful para gerenciamento de tarefas com autenticação JWT.

### Tecnologias
- Java 21
- Spring Boot 3.5.5
- Spring Security 6
- PostgreSQL / H2
- JWT (jjwt 0.12.3)
- Lombok

---

## 2. Correções de Compilação

### 2.1 JwtService.java - Parser JWT

**Arquivo:** `src/main/java/br/com/jtech/tasklist/config/security/JwtService.java`

**Problema:**
```java
// INCORRETO
private Claims extractAllClaims(String token) {
    return Jwts.builder().setClaims() // ❌ Erro
            .build()
            .parseClaimsJws(token)
            .getBody();
}
```

**Solução:**
```java
// CORRETO
private Claims extractAllClaims(String token) {
    return Jwts.parser() // ✅ parser() para ler tokens
            .setSigningKey(getSignInKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
}
```

**Explicação:**
- `Jwts.builder()` → usado para CRIAR tokens
- `Jwts.parser()` → usado para LER/VALIDAR tokens
- Adicionado `setSigningKey()` para validação

---

### 2.2 AuthResponse.java - Builder Lombok

**Arquivo:** `src/main/java/br/com/jtech/tasklist/adapters/input/protocols/auth/AuthResponse.java`

**Problema:**
```java
@Builder
public class AuthResponse {
    private String tokenType = "Bearer"; // ⚠️ Ignorado pelo Builder
}
```

**Solução:**
```java
@Builder
public class AuthResponse {
    @Builder.Default // ✅ Preserva valor padrão
    private String tokenType = "Bearer";
}
```

**Explicação:**
- `@Builder.Default` indica que "Bearer" é o valor padrão
- Sem essa anotação, o campo fica `null` ao usar o builder

---

### 2.3 CreateTasklistController.java - Autenticação

**Arquivo:** `src/main/java/br/com/jtech/tasklist/adapters/input/controllers/CreateTasklistController.java`

**Problema:**
```java
@PostMapping
public ResponseEntity<Void> create(@RequestBody TasklistRequest request) {
    createTasklistInputGateway.create(of(request)); // ❌ Falta userId
}
```

**Solução:**
```java
@PostMapping
public ResponseEntity<Void> create(@RequestBody TasklistRequest request) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String userId = auth.getName(); // ✅ Obtém userId
    createTasklistInputGateway.create(of(request, userId));
}
```

**Explicação:**
- `SecurityContextHolder` armazena o contexto de autenticação
- `getAuthentication().getName()` retorna o email do usuário logado
- O método `Tasklist.of()` requer dois parâmetros: request e userId

---

## 3. Configuração de Segurança

### 3.1 Problema: Dependência Circular

**Erro:**
```
RuntimeException: Could not postProcess WebSecurity
```

**Causa:** `SecurityConfiguration` chamava `authenticationProvider()` diretamente, criando dependência circular.

---

### 3.2 Solução: Separação de Configurações

#### AuthenticationConfig.java (NOVO)

**Arquivo:** `src/main/java/br/com/jtech/tasklist/config/security/AuthenticationConfig.java`

```java
@Configuration
@RequiredArgsConstructor
public class AuthenticationConfig {
    private final UserDetailsService userDetailsService;

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

**Responsabilidades:**
- Criar `AuthenticationProvider`
- Criar `AuthenticationManager`
- Criar `PasswordEncoder` (BCrypt)

---

#### SecurityConfiguration.java (REFATORADO)

**Arquivo:** `src/main/java/br/com/jtech/tasklist/config/security/SecurityConfiguration.java`

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider; // ✅ Injetado

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/v1/auth/**",
                    "/v3/api-docs/**",
                    "/doc/**",
                    "/swagger-ui/**",
                    "/actuator/**",
                    "/h2-console/**"
                ).permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider) // ✅ Usa bean injetado
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

**Mudanças:**
- Removido método `authenticationProvider()` (movido para `AuthenticationConfig`)
- Injetado `AuthenticationProvider` via construtor
- Adicionados endpoints públicos: `/doc/**`, `/h2-console/**`

---

### 3.3 JwtAuthenticationFilter

**Arquivo:** `src/main/java/br/com/jtech/tasklist/config/security/JwtAuthenticationFilter.java`

**Fluxo:**
1. Extrai header `Authorization: Bearer <token>`
2. Valida o token JWT
3. Extrai email do token
4. Carrega usuário do banco
5. Cria `UsernamePasswordAuthenticationToken`
6. Armazena no `SecurityContextHolder`

**Código Principal:**
```java
@Override
protected void doFilterInternal(HttpServletRequest request, 
                                HttpServletResponse response, 
                                FilterChain filterChain) {
    final String authHeader = request.getHeader("Authorization");
    
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
        filterChain.doFilter(request, response);
        return;
    }

    String jwt = authHeader.substring(7);
    String userEmail = jwtService.extractUsername(jwt);

    if (userEmail != null && SecurityContextHolder.getContext()
            .getAuthentication() == null) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);
        
        if (jwtService.isTokenValid(jwt, userDetails)) {
            UsernamePasswordAuthenticationToken authToken = 
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );
            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
    }
    
    filterChain.doFilter(request, response);
}
```

---

### 3.4 CustomUserDetailsService

**Arquivo:** `src/main/java/br/com/jtech/tasklist/config/security/CustomUserDetailsService.java`

```java
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        UserEntity user = userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException(
                "User not found with email: " + email
            ));

        return new User(
            user.getEmail(),
            user.getPassword(),
            new ArrayList<>()
        );
    }
}
```

**Responsabilidade:** Carregar usuários do banco para autenticação

---

## 4. Configuração de Banco de Dados

### 4.1 application.yml

**Arquivo:** `src/main/resources/application.yml`

**Mudanças:**
```yaml
spring:
  datasource:
    password: ${DS_PASS:1254}  # ✅ Senha atualizada (era: postgres)
```

**Configurações:**
- Driver: PostgreSQL
- URL: `jdbc:postgresql://localhost:5432/jtech_tasklist`
- Usuário: `postgres`
- Senha: `1254`
- DDL: `update` (atualiza schema automaticamente)

---

### 4.2 application-dev.yml (NOVO)

**Arquivo:** `src/main/resources/application-dev.yml`

```yaml
spring:
  datasource:
    driverClassName: org.h2.Driver
    url: jdbc:h2:mem:jtech_tasklist
  h2:
    console:
      enabled: true
      path: /h2-console
```

**Uso:** Profile de desenvolvimento com H2 (banco em memória)

**Ativar:**
```bash
export PROFILE=dev
# ou
java -jar app.jar --spring.profiles.active=dev
```

---

## 5. Refatoração de Controladores

### 5.1 Remoção do CreateTasklistController

**Problema:** Dois controladores com mesmo mapeamento `/api/v1/tasklists`

```
CreateTasklistController.java  ❌ REMOVIDO
TasklistController.java        ✅ MANTIDO
```

**Erro:**
```
IllegalStateException: Ambiguous mapping
```

**Solução:** Removido `CreateTasklistController` pois `TasklistController` já possui todos os endpoints.

---

### 5.2 TasklistController

**Arquivo:** `src/main/java/br/com/jtech/tasklist/adapters/input/controllers/TasklistController.java`

**Endpoints:**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/v1/tasklists` | Criar tasklist |
| GET | `/api/v1/tasklists` | Listar todas |
| GET | `/api/v1/tasklists/{id}` | Buscar por ID |
| PUT | `/api/v1/tasklists/{id}` | Atualizar |
| DELETE | `/api/v1/tasklists/{id}` | Deletar |

**Método Auxiliar:**
```java
private String getUserIdFromAuth(Authentication authentication) {
    String email = authentication.getName();
    return userRepository.findByEmail(email)
        .orElseThrow(() -> new IllegalArgumentException("User not found"))
        .getId();
}
```

---

## 6. Resumo das Mudanças

### Arquivos Criados
1. ✅ `AuthenticationConfig.java` - Configuração de autenticação
2. ✅ `application-dev.yml` - Profile de desenvolvimento
3. ✅ `API_ENDPOINTS.md` - Documentação de endpoints
4. ✅ `MODIFICACOES.md` - Este documento

### Arquivos Modificados
1. ✅ `JwtService.java` - Corrigido parser JWT
2. ✅ `AuthResponse.java` - Adicionado @Builder.Default
3. ✅ `SecurityConfiguration.java` - Refatorado para evitar dependência circular
4. ✅ `application.yml` - Atualizada senha do PostgreSQL

### Arquivos Removidos
1. ❌ `CreateTasklistController.java` - Duplicado

---

## Checklist de Apresentação

### Problemas Resolvidos
- [x] Erro de compilação no JwtService (parser vs builder)
- [x] Warning do Lombok no AuthResponse
- [x] Erro de parâmetros no CreateTasklistController
- [x] Dependência circular na SecurityConfiguration
- [x] Erro de autenticação do PostgreSQL
- [x] Incompatibilidade de versão Java (21 vs 17)
- [x] Mapeamento ambíguo de controladores

### Melhorias Implementadas
- [x] Separação de responsabilidades (AuthenticationConfig)
- [x] Suporte a múltiplos profiles (dev/prod)
- [x] Documentação completa de endpoints
- [x] Configuração CORS para frontend
- [x] Endpoints públicos configurados
- [x] Logs estruturados

### Arquitetura
- [x] Arquitetura Hexagonal (Ports & Adapters)
- [x] Princípios SOLID aplicados
- [x] Separação clara de camadas
- [x] Injeção de dependências
- [x] Stateless authentication (JWT)

---

## Comandos Úteis

### Compilar
```bash
.\gradlew.bat clean build
```

### Executar
```bash
.\gradlew.bat bootRun
```

### Executar com profile dev
```bash
.\gradlew.bat bootRun --args='--spring.profiles.active=dev'
```

### Testar endpoints
```bash
# Registrar usuário
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"123456"}'

# Login
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'
```

---

**Documentação criada em:** 13/11/2025  
**Versão:** 1.0.0
