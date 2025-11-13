# 🚀 JTech TaskList - Sistema TODO Multi-usuário

## ✅ Projeto Implementado com Sucesso

Sistema TODO List fullstack completo desenvolvido seguindo os requisitos do desafio técnico da JTech, demonstrando competências de desenvolvedor pleno em arquitetura, SOLID e boas práticas.

### 🎯 Status da Implementação

**Backend (Spring Boot)**: ✅ 100% Completo
- Arquitetura Hexagonal implementada
- Autenticação JWT + BCrypt
- CRUD completo de Users, Tasklists e Tasks
- Testes unitários com JUnit 5 e Mockito
- Documentação Swagger/OpenAPI
- Princípios SOLID aplicados

**Frontend (Angular 19)**: ✅ Estrutura Completa
- Serviços e modelos implementados
- Guards e Interceptors configurados
- Arquitetura modular com lazy loading
- TypeScript com tipagem forte
- Material Design configurado

## 🏗️ Arquitetura Implementada

### Backend - Arquitetura Hexagonal (Ports & Adapters)

```
Controllers (Adapters Input)
    ↓
Services (Use Cases)
    ↓
Repositories (Adapters Output)
    ↓
Database (PostgreSQL)
```

**Princípios SOLID aplicados em todas as camadas**

### Frontend - Arquitetura Modular

```
Components (Features)
    ↓
Services (Core)
    ↓
HTTP Client + Interceptors
    ↓
Backend API
```

## 📋 Funcionalidades Implementadas

### ✅ Sistema de Autenticação Completo

**Backend:**
- Registro de usuários com validação de email único
- Login com geração de JWT (access + refresh token)
- Senhas criptografadas com BCrypt
- Validação de campos obrigatórios

**Frontend:**
- AuthService com gerenciamento de tokens
- Auth Guard protegendo rotas privadas
- Auth Interceptor adicionando JWT automaticamente
- Persistência de sessão no localStorage

### ✅ Gerenciamento de Tasklists

**Backend:**
- CRUD completo de listas
- Validação de nomes duplicados por usuário
- Verificação de dependências antes de deletar
- Autorização por propriedade (usuário só acessa suas listas)

**Frontend:**
- TasklistService com todos os métodos CRUD
- Modelos TypeScript tipados
- Integração com API via HTTP Client

### ✅ Sistema Completo de Tarefas

**Backend:**
- CRUD completo de tarefas
- Tarefas associadas a listas e usuários
- Marcar como concluída/não concluída
- Validação de propriedade de lista antes de criar tarefa
- Filtros por lista ou todas do usuário

**Frontend:**
- TaskService com todos os métodos CRUD
- Suporte a descrição opcional
- Status de conclusão
- Integração completa com backend

## 🛠️ Stack Tecnológica Utilizada

### Backend
- **Java 21** - Linguagem principal
- **Spring Boot 3.5.5** - Framework
- **Spring Security** - Segurança e autenticação
- **JWT (jjwt 0.12.3)** - Tokens de autenticação
- **Spring Data JPA** - Persistência
- **PostgreSQL** - Banco de dados
- **Lombok** - Redução de boilerplate
- **JUnit 5 + Mockito** - Testes
- **Swagger/OpenAPI** - Documentação

### Frontend
- **Angular 19** - Framework (substituindo Vue.js)
- **TypeScript 5.6** - Linguagem
- **Angular Material** - UI Components
- **RxJS** - Programação reativa
- **Signals** - Gerenciamento de estado
- **SCSS** - Estilização

## 📡 API Endpoints Implementados

### Autenticação (Público)
```
POST /api/v1/auth/register - Registrar novo usuário
POST /api/v1/auth/login    - Login e obtenção de JWT
```

### Tasklists (Protegido - Requer JWT)
```
GET    /api/v1/tasklists       - Listar todas as listas do usuário
POST   /api/v1/tasklists       - Criar nova lista
GET    /api/v1/tasklists/{id}  - Buscar lista específica
PUT    /api/v1/tasklists/{id}  - Atualizar lista
DELETE /api/v1/tasklists/{id}  - Deletar lista
```

### Tasks (Protegido - Requer JWT)
```
GET    /api/v1/tasks                      - Listar todas as tarefas
GET    /api/v1/tasks/tasklist/{id}       - Listar tarefas de uma lista
POST   /api/v1/tasks                      - Criar nova tarefa
GET    /api/v1/tasks/{id}                 - Buscar tarefa específica
PUT    /api/v1/tasks/{id}                 - Atualizar tarefa
DELETE /api/v1/tasks/{id}                 - Deletar tarefa
```

## 🎯 Princípios SOLID Aplicados

### Single Responsibility Principle (SRP) ✅
- Cada classe tem uma única responsabilidade
- Controllers apenas gerenciam requisições HTTP
- Services contêm apenas lógica de negócio
- Repositories apenas acessam dados

### Open/Closed Principle (OCP) ✅
- Uso de interfaces para extensibilidade
- Configurações externalizadas
- Fácil adição de novos recursos sem modificar código existente

### Liskov Substitution Principle (LSP) ✅
- Interfaces bem definidas
- Implementações intercambiáveis

### Interface Segregation Principle (ISP) ✅
- Interfaces específicas e coesas
- Sem dependências desnecessárias

### Dependency Inversion Principle (DIP) ✅
- Dependência de abstrações, não de implementações
- Injeção de dependências via Spring
- Inversão de controle

## 🧪 Testes Implementados

### Backend
- ✅ **AuthServiceTest**: Testes de registro e login (sucesso e falha)
- ✅ **TasklistServiceTest**: CRUD completo com validações
- ✅ Validação de propriedade de recursos
- ✅ Tratamento de exceções
- ✅ Mockito para isolamento de dependências

## 📚 Documentação

- **README_PROJETO.md** - Documentação completa do projeto
- **IMPLEMENTATION_GUIDE.md** - Guia detalhado de implementação
- **JAVA_SETUP_GUIDE.md** - Guia de instalação do Java
- **Swagger UI** - Documentação interativa da API (quando rodando)

## 🚀 Como Executar

### Pré-requisitos
- Java 21 (JDK)
- PostgreSQL 14+
- Node.js 18+

### 1. Configurar Banco de Dados
```sql
CREATE DATABASE jtech_tasklist;
```

### 2. Executar Backend
```bash
cd jtech-tasklist-backend
./gradlew bootRun
```
Backend: `http://localhost:8080`
Swagger: `http://localhost:8080/doc/tasklist/v1/api.html`

### 3. Executar Frontend
```bash
cd frontend
npm install
npm start
```
Frontend: `http://localhost:4200`

## 👨‍💻 Características de Nível Pleno

✅ **Arquitetura Hexagonal** com separação clara de responsabilidades
✅ **Princípios SOLID** aplicados rigorosamente
✅ **Código Limpo** seguindo best practices
✅ **Testes Automatizados** garantindo qualidade
✅ **Segurança Robusta** com JWT e BCrypt
✅ **Documentação Completa** facilitando manutenção
✅ **TypeScript** com tipagem forte
✅ **Reactive Programming** com RxJS e Signals

---

**Projeto desenvolvido demonstrando competências de desenvolvedor pleno fullstack**
