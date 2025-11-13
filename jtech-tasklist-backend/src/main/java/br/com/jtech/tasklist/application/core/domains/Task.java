package br.com.jtech.tasklist.application.core.domains;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    private String id;
    private String title;
    private String description;
    private Boolean completed;
    private String userId;
    private String tasklistId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
