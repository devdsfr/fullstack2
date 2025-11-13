package br.com.jtech.tasklist.application.core.usecases.tasklist;

import br.com.jtech.tasklist.adapters.input.protocols.TasklistRequest;
import br.com.jtech.tasklist.adapters.input.protocols.TasklistResponse;
import br.com.jtech.tasklist.adapters.output.repositories.TaskRepository;
import br.com.jtech.tasklist.adapters.output.repositories.TasklistRepository;
import br.com.jtech.tasklist.adapters.output.repositories.entities.TasklistEntity;
import br.com.jtech.tasklist.application.core.domains.Tasklist;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Tasklist Service
 * Following Single Responsibility Principle (SRP) - handles only tasklist business logic
 * Following Dependency Inversion Principle (DIP) - depends on repository abstractions
 */
@Service
@RequiredArgsConstructor
public class TasklistService {

    private final TasklistRepository tasklistRepository;
    private final TaskRepository taskRepository;

    @Transactional
    public TasklistResponse createTasklist(TasklistRequest request, String userId) {
        // Validate duplicate name for the same user
        if (tasklistRepository.existsByNameAndUserId(request.getName(), userId)) {
            throw new IllegalArgumentException("A tasklist with this name already exists");
        }

        var tasklist = TasklistEntity.builder()
                .id(UUID.randomUUID().toString())
                .name(request.getName())
                .userId(userId)
                .build();

        var savedTasklist = tasklistRepository.save(tasklist);
        return TasklistResponse.of(savedTasklist);
    }

    public List<TasklistResponse> getAllTasklists(String userId) {
        return tasklistRepository.findByUserId(userId).stream()
                .map(TasklistResponse::of)
                .collect(Collectors.toList());
    }

    public TasklistResponse getTasklistById(String id, String userId) {
        var tasklist = tasklistRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Tasklist not found or access denied"));
        return TasklistResponse.of(tasklist);
    }

    @Transactional
    public TasklistResponse updateTasklist(String id, TasklistRequest request, String userId) {
        var tasklist = tasklistRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Tasklist not found or access denied"));

        // Validate duplicate name (excluding current tasklist)
        if (!tasklist.getName().equals(request.getName()) &&
                tasklistRepository.existsByNameAndUserId(request.getName(), userId)) {
            throw new IllegalArgumentException("A tasklist with this name already exists");
        }

        tasklist.setName(request.getName());
        var updatedTasklist = tasklistRepository.save(tasklist);
        return TasklistResponse.of(updatedTasklist);
    }

    @Transactional
    public void deleteTasklist(String id, String userId) {
        var tasklist = tasklistRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new IllegalArgumentException("Tasklist not found or access denied"));

        // Check if tasklist has tasks
        var tasks = taskRepository.findByTasklistId(id);
        if (!tasks.isEmpty()) {
            throw new IllegalArgumentException("Cannot delete tasklist with existing tasks. Delete all tasks first.");
        }

        tasklistRepository.delete(tasklist);
    }
}
