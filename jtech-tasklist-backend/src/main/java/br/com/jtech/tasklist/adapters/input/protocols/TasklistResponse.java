/*
*  @(#)TasklistResponse.java
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
package br.com.jtech.tasklist.adapters.input.protocols;

import br.com.jtech.tasklist.application.core.domains.Tasklist;
import br.com.jtech.tasklist.adapters.output.repositories.entities.TasklistEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
* class TasklistResponse 
* 
* user angelo.vicente 
*/
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class TasklistResponse implements Serializable {
    private String id;
    private String name;
    private String userId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static TasklistResponse of(Tasklist tasklist) {
        return TasklistResponse.builder()
                .id(tasklist.getId())
                .name(tasklist.getName())
                .userId(tasklist.getUserId())
                .createdAt(tasklist.getCreatedAt())
                .updatedAt(tasklist.getUpdatedAt())
                .build();
    }

    public static TasklistResponse of(TasklistEntity entity) {
        var response = new TasklistResponse();
        BeanUtils.copyProperties(entity, response);
        return response;
    }
}