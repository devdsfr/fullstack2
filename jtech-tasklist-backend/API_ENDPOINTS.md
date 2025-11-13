# API Endpoints - Tasklist Application

Base URL: `http://localhost:8080`

## 1. Authentication Endpoints

### 1.1 Register User
```bash
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

### 1.2 Login
```bash
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "tokenType": "Bearer",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

### 1.3 Refresh Token
```bash
curl -X POST http://localhost:8080/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }'
```

---

## 2. Tasklist Endpoints

**Note:** All tasklist endpoints require authentication. Use the `accessToken` from login.

### 2.1 Create Tasklist
```bash
curl -X POST http://localhost:8080/api/v1/tasklists \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "name": "My Project Tasks"
  }'
```

### 2.2 Get All Tasklists
```bash
curl -X GET http://localhost:8080/api/v1/tasklists \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 2.3 Get Tasklist by ID
```bash
curl -X GET http://localhost:8080/api/v1/tasklists/{tasklistId} \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 2.4 Update Tasklist
```bash
curl -X PUT http://localhost:8080/api/v1/tasklists/{tasklistId} \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "name": "Updated Project Tasks"
  }'
```

### 2.5 Delete Tasklist
```bash
curl -X DELETE http://localhost:8080/api/v1/tasklists/{tasklistId} \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## 3. Task Endpoints

**Note:** All task endpoints require authentication.

### 3.1 Create Task
```bash
curl -X POST http://localhost:8080/api/v1/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "title": "Implement login feature",
    "description": "Create login page with JWT authentication",
    "status": "TODO",
    "priority": "HIGH",
    "tasklistId": "tasklist-uuid-here"
  }'
```

**Status values:** `TODO`, `IN_PROGRESS`, `DONE`  
**Priority values:** `LOW`, `MEDIUM`, `HIGH`

### 3.2 Get All Tasks
```bash
curl -X GET http://localhost:8080/api/v1/tasks \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 3.3 Get Tasks by Tasklist
```bash
curl -X GET "http://localhost:8080/api/v1/tasks/tasklist/{tasklistId}" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 3.4 Get Task by ID
```bash
curl -X GET http://localhost:8080/api/v1/tasks/{taskId} \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 3.5 Update Task
```bash
curl -X PUT http://localhost:8080/api/v1/tasks/{taskId} \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "title": "Updated task title",
    "description": "Updated description",
    "status": "IN_PROGRESS",
    "priority": "MEDIUM",
    "tasklistId": "tasklist-uuid-here"
  }'
```

### 3.6 Delete Task
```bash
curl -X DELETE http://localhost:8080/api/v1/tasks/{taskId} \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## 4. Health Check & Monitoring

### 4.1 Actuator Health
```bash
curl -X GET http://localhost:8080/actuator/health
```

### 4.2 Actuator Info
```bash
curl -X GET http://localhost:8080/actuator/info
```

---

## 5. API Documentation

### 5.1 Swagger UI
Open in browser: `http://localhost:8080/doc/tasklist/v1/api.html`

### 5.2 OpenAPI JSON
```bash
curl -X GET http://localhost:8080/doc/tasklist/v3/api-documents
```

---

## Complete Workflow Example

### Step 1: Register a new user
```bash
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password": "securepass123"
  }'
```

### Step 2: Login
```bash
TOKEN=$(curl -s -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "securepass123"
  }' | jq -r '.accessToken')

echo "Token: $TOKEN"
```

### Step 3: Create a tasklist
```bash
TASKLIST_ID=$(curl -s -X POST http://localhost:8080/api/v1/tasklists \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Work Tasks"
  }' | jq -r '.id')

echo "Tasklist ID: $TASKLIST_ID"
```

### Step 4: Create a task
```bash
curl -X POST http://localhost:8080/api/v1/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{
    \"title\": \"Complete API documentation\",
    \"description\": \"Write comprehensive API docs\",
    \"status\": \"TODO\",
    \"priority\": \"HIGH\",
    \"tasklistId\": \"$TASKLIST_ID\"
  }"
```

### Step 5: Get all tasks
```bash
curl -X GET http://localhost:8080/api/v1/tasks \
  -H "Authorization: Bearer $TOKEN"
```

---

## PowerShell Examples (Windows)

### Register User
```powershell
$body = @{
    name = "John Doe"
    email = "john@example.com"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/v1/auth/register" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body
```

### Login
```powershell
$loginBody = @{
    email = "john@example.com"
    password = "password123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:8080/api/v1/auth/login" `
    -Method Post `
    -ContentType "application/json" `
    -Body $loginBody

$token = $response.accessToken
Write-Host "Token: $token"
```

### Create Tasklist
```powershell
$headers = @{
    Authorization = "Bearer $token"
    "Content-Type" = "application/json"
}

$tasklistBody = @{
    name = "My Tasks"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/v1/tasklists" `
    -Method Post `
    -Headers $headers `
    -Body $tasklistBody
```

### Get All Tasklists
```powershell
$headers = @{
    Authorization = "Bearer $token"
}

Invoke-RestMethod -Uri "http://localhost:8080/api/v1/tasklists" `
    -Method Get `
    -Headers $headers
```

---

## Notes

1. Replace `YOUR_ACCESS_TOKEN` with the actual token received from login
2. Replace `{tasklistId}` and `{taskId}` with actual UUIDs
3. The access token expires after 24 hours (configurable via `jwt.expiration`)
4. The refresh token expires after 7 days (configurable via `jwt.refresh-expiration`)
5. All timestamps are in ISO-8601 format
6. All IDs are UUIDs (v4)
