/*
*  @(#)Tasklist.java
*
*  Copyright (c) J-Tech Solucoes em Informatica.
*  All Rights Reserved.
*
*  This software is the confidential and proprietary information of J-Tech.
*  ("Confidential Information"). You shall not disclose such Confidential
*  Information and shall use it only in accordance with the terms of the
*  license agreement you entered into with J-Tech.
*
*/
package br.com.jtech.tasklist.application.core.domains;

import br.com.jtech.tasklist.adapters.input.protocols.TasklistRequest;
import br.com.jtech.tasklist.adapters.output.repositories.entities.TasklistEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
* class Tasklist 
* 
* user angelo.vicente 
*/
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Tasklist {

    private String id;
    private String name;
    private String userId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static List<Tasklist> of(List<TasklistEntity> entities) {
        return entities.stream().map(Tasklist::of).toList();
     }

    public TasklistEntity toEntity() {
        return TasklistEntity.builder()
            .id(getId())
            .name(getName())
            .userId(getUserId())
            .createdAt(getCreatedAt())
            .updatedAt(getUpdatedAt())
            .build();
     }

    public static Tasklist of(TasklistEntity entity) {
        return Tasklist.builder()
            .id(entity.getId())
            .name(entity.getName())
            .userId(entity.getUserId())
            .createdAt(entity.getCreatedAt())
            .updatedAt(entity.getUpdatedAt())
            .build();
     }

    public static Tasklist of(TasklistRequest request, String userId) {
        return Tasklist.builder()
            .id(UUID.randomUUID().toString())
            .name(request.getName())
            .userId(userId)
            .build();
     }
 }