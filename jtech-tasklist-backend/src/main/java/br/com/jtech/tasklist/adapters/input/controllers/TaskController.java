package br.com.jtech.tasklist.adapters.input.controllers;

import br.com.jtech.tasklist.adapters.input.protocols.task.CreateTaskRequest;
import br.com.jtech.tasklist.adapters.input.protocols.task.TaskResponse;
import br.com.jtech.tasklist.adapters.input.protocols.task.UpdateTaskRequest;
import br.com.jtech.tasklist.application.core.usecases.task.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Task Controller
 * Following Single Responsibility Principle (SRP) - handles only HTTP task requests
 * Following Dependency Inversion Principle (DIP) - depends on TaskService abstraction
 */
@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
@Tag(name = "Tasks", description = "Task management endpoints")
@SecurityRequirement(name = "bearerAuth")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    @Operation(summary = "Create a new task")
    public ResponseEntity<TaskResponse> createTask(
            @Valid @RequestBody CreateTaskRequest request,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.createTask(request, userId));
    }

    @GetMapping
    @Operation(summary = "Get all tasks for the authenticated user")
    public ResponseEntity<List<TaskResponse>> getAllTasks(Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(taskService.getAllTasks(userId));
    }

    @GetMapping("/tasklist/{tasklistId}")
    @Operation(summary = "Get all tasks for a specific tasklist")
    public ResponseEntity<List<TaskResponse>> getTasksByTasklist(
            @PathVariable String tasklistId,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(taskService.getTasksByTasklist(tasklistId, userId));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a specific task by ID")
    public ResponseEntity<TaskResponse> getTaskById(
            @PathVariable String id,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(taskService.getTaskById(id, userId));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update a task")
    public ResponseEntity<TaskResponse> updateTask(
            @PathVariable String id,
            @Valid @RequestBody UpdateTaskRequest request,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(taskService.updateTask(id, request, userId));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a task")
    public ResponseEntity<Void> deleteTask(
            @PathVariable String id,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        taskService.deleteTask(id, userId);
        return ResponseEntity.noContent().build();
    }

    private String getUserIdFromAuth(Authentication authentication) {
        // The email is stored in the authentication principal
        // We need to fetch the user ID from the repository
        return authentication.getName();
    }
}
