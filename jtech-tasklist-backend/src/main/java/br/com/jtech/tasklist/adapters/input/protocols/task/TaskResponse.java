package br.com.jtech.tasklist.adapters.input.protocols.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskResponse {
    private String id;
    private String title;
    private String description;
    private Boolean completed;
    private String tasklistId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
