package br.com.jtech.tasklist.application.core.usecases.tasklist;

import br.com.jtech.tasklist.adapters.input.protocols.TasklistRequest;
import br.com.jtech.tasklist.adapters.output.repositories.TaskRepository;
import br.com.jtech.tasklist.adapters.output.repositories.TasklistRepository;
import br.com.jtech.tasklist.adapters.output.repositories.entities.TasklistEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TasklistServiceTest {

    @Mock
    private TasklistRepository tasklistRepository;

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TasklistService tasklistService;

    private TasklistRequest tasklistRequest;
    private TasklistEntity tasklistEntity;
    private String userId;

    @BeforeEach
    void setUp() {
        userId = "user-id";

        tasklistRequest = TasklistRequest.builder()
                .name("Work Tasks")
                .build();

        tasklistEntity = TasklistEntity.builder()
                .id("tasklist-id")
                .name("Work Tasks")
                .userId(userId)
                .build();
    }

    @Test
    void shouldCreateTasklistSuccessfully() {
        // Given
        when(tasklistRepository.existsByNameAndUserId(anyString(), anyString())).thenReturn(false);
        when(tasklistRepository.save(any(TasklistEntity.class))).thenReturn(tasklistEntity);

        // When
        var response = tasklistService.createTasklist(tasklistRequest, userId);

        // Then
        assertThat(response).isNotNull();
        assertThat(response.getName()).isEqualTo("Work Tasks");
        assertThat(response.getUserId()).isEqualTo(userId);
        verify(tasklistRepository).save(any(TasklistEntity.class));
    }

    @Test
    void shouldThrowExceptionWhenTasklistNameAlreadyExists() {
        // Given
        when(tasklistRepository.existsByNameAndUserId(anyString(), anyString())).thenReturn(true);

        // When/Then
        assertThatThrownBy(() -> tasklistService.createTasklist(tasklistRequest, userId))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("A tasklist with this name already exists");

        verify(tasklistRepository, never()).save(any());
    }

    @Test
    void shouldGetAllTasklistsSuccessfully() {
        // Given
        when(tasklistRepository.findByUserId(userId)).thenReturn(List.of(tasklistEntity));

        // When
        var response = tasklistService.getAllTasklists(userId);

        // Then
        assertThat(response).hasSize(1);
        assertThat(response.get(0).getName()).isEqualTo("Work Tasks");
    }

    @Test
    void shouldGetTasklistByIdSuccessfully() {
        // Given
        when(tasklistRepository.findByIdAndUserId(anyString(), anyString()))
                .thenReturn(Optional.of(tasklistEntity));

        // When
        var response = tasklistService.getTasklistById("tasklist-id", userId);

        // Then
        assertThat(response).isNotNull();
        assertThat(response.getName()).isEqualTo("Work Tasks");
    }

    @Test
    void shouldThrowExceptionWhenTasklistNotFound() {
        // Given
        when(tasklistRepository.findByIdAndUserId(anyString(), anyString()))
                .thenReturn(Optional.empty());

        // When/Then
        assertThatThrownBy(() -> tasklistService.getTasklistById("tasklist-id", userId))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("Tasklist not found or access denied");
    }

    @Test
    void shouldUpdateTasklistSuccessfully() {
        // Given
        TasklistRequest updateRequest = TasklistRequest.builder()
                .name("Updated Work Tasks")
                .build();

        when(tasklistRepository.findByIdAndUserId(anyString(), anyString()))
                .thenReturn(Optional.of(tasklistEntity));
        when(tasklistRepository.existsByNameAndUserId(anyString(), anyString())).thenReturn(false);
        when(tasklistRepository.save(any(TasklistEntity.class))).thenReturn(tasklistEntity);

        // When
        var response = tasklistService.updateTasklist("tasklist-id", updateRequest, userId);

        // Then
        assertThat(response).isNotNull();
        verify(tasklistRepository).save(any(TasklistEntity.class));
    }

    @Test
    void shouldDeleteTasklistSuccessfully() {
        // Given
        when(tasklistRepository.findByIdAndUserId(anyString(), anyString()))
                .thenReturn(Optional.of(tasklistEntity));
        when(taskRepository.findByTasklistId(anyString())).thenReturn(Collections.emptyList());

        // When
        tasklistService.deleteTasklist("tasklist-id", userId);

        // Then
        verify(tasklistRepository).delete(tasklistEntity);
    }

    @Test
    void shouldThrowExceptionWhenDeletingTasklistWithTasks() {
        // Given
        when(tasklistRepository.findByIdAndUserId(anyString(), anyString()))
                .thenReturn(Optional.of(tasklistEntity));
        when(taskRepository.findByTasklistId(anyString())).thenReturn(List.of(mock()));

        // When/Then
        assertThatThrownBy(() -> tasklistService.deleteTasklist("tasklist-id", userId))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("Cannot delete tasklist with existing tasks. Delete all tasks first.");

        verify(tasklistRepository, never()).delete(any());
    }
}
