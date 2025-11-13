package br.com.jtech.tasklist.application.core.usecases.task;

import br.com.jtech.tasklist.adapters.input.protocols.task.CreateTaskRequest;
import br.com.jtech.tasklist.adapters.input.protocols.task.TaskResponse;
import br.com.jtech.tasklist.adapters.input.protocols.task.UpdateTaskRequest;
import br.com.jtech.tasklist.adapters.output.repositories.TaskRepository;
import br.com.jtech.tasklist.adapters.output.repositories.TasklistRepository;
import br.com.jtech.tasklist.adapters.output.repositories.entities.TaskEntity;
import br.com.jtech.tasklist.application.core.domains.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Task Service
 * Following Single Responsibility Principle (SRP) - handles only task business logic
 * Following Dependency Inversion Principle (DIP) - depends on repository abstractions
 */
@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final TasklistRepository tasklistRepository;

    @Transactional
    public TaskResponse createTask(CreateTaskRequest request, String userId) {
        // Validate tasklist ownership
        tasklistRepository.findByIdAndUserId(request.getTasklistId(), userId)
                .orElseThrow(() -> new IllegalArgumentException("Tasklist not found or access denied"));

        var task = TaskEntity.builder()
                .id(UUID.randomUUID().toString())
                .title(request.getTitle())
                .description(request.getDescription())
                .completed(false)
                .userId(userId)
                .tasklistId(request.getTasklistId())
                .build();

        var savedTask = taskRepository.save(task);
        return mapToResponse(savedTask);
    }

    public List<TaskResponse> getAllTasks(String userId) {
        return taskRepository.findByUserId(userId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<TaskResponse> getTasksByTasklist(String tasklistId, String userId) {
        // Validate tasklist ownership
        tasklistRepository.findByIdAndUserId(tasklistId, userId)
                .orElseThrow(() -> new IllegalArgumentException("Tasklist not found or access denied"));

        return taskRepository.findByUserIdAndTasklistId(userId, tasklistId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TaskResponse getTaskById(String id, String userId) {
        var task = taskRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Task not found or access denied"));
        return mapToResponse(task);
    }

    @Transactional
    public TaskResponse updateTask(String id, UpdateTaskRequest request, String userId) {
        var task = taskRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Task not found or access denied"));

        if (request.getTitle() != null) {
            task.setTitle(request.getTitle());
        }
        if (request.getDescription() != null) {
            task.setDescription(request.getDescription());
        }
        if (request.getCompleted() != null) {
            task.setCompleted(request.getCompleted());
        }

        var updatedTask = taskRepository.save(task);
        return mapToResponse(updatedTask);
    }

    @Transactional
    public void deleteTask(String id, String userId) {
        var task = taskRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Task not found or access denied"));
        taskRepository.delete(task);
    }

    private TaskResponse mapToResponse(TaskEntity entity) {
        return TaskResponse.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .completed(entity.getCompleted())
                .tasklistId(entity.getTasklistId())
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }
}
