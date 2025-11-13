package br.com.jtech.tasklist.adapters.input.controllers;

import br.com.jtech.tasklist.adapters.input.protocols.TasklistRequest;
import br.com.jtech.tasklist.adapters.input.protocols.TasklistResponse;
import br.com.jtech.tasklist.adapters.output.repositories.UserRepository;
import br.com.jtech.tasklist.application.core.usecases.tasklist.TasklistService;
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
 * Tasklist Controller
 * Following Single Responsibility Principle (SRP) - handles only HTTP tasklist requests
 * Following Dependency Inversion Principle (DIP) - depends on TasklistService abstraction
 */
@RestController
@RequestMapping("/api/v1/tasklists")
@RequiredArgsConstructor
@Tag(name = "Tasklists", description = "Tasklist management endpoints")
@SecurityRequirement(name = "bearerAuth")
public class TasklistController {

    private final TasklistService tasklistService;
    private final UserRepository userRepository;

    @PostMapping
    @Operation(summary = "Create a new tasklist")
    public ResponseEntity<TasklistResponse> createTasklist(
            @Valid @RequestBody TasklistRequest request,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(tasklistService.createTasklist(request, userId));
    }

    @GetMapping
    @Operation(summary = "Get all tasklists for the authenticated user")
    public ResponseEntity<List<TasklistResponse>> getAllTasklists(Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(tasklistService.getAllTasklists(userId));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a specific tasklist by ID")
    public ResponseEntity<TasklistResponse> getTasklistById(
            @PathVariable String id,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(tasklistService.getTasklistById(id, userId));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update a tasklist")
    public ResponseEntity<TasklistResponse> updateTasklist(
            @PathVariable String id,
            @Valid @RequestBody TasklistRequest request,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        return ResponseEntity.ok(tasklistService.updateTasklist(id, request, userId));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a tasklist")
    public ResponseEntity<Void> deleteTasklist(
            @PathVariable String id,
            Authentication authentication) {
        String userId = getUserIdFromAuth(authentication);
        tasklistService.deleteTasklist(id, userId);
        return ResponseEntity.noContent().build();
    }

    private String getUserIdFromAuth(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"))
                .getId();
    }
}
