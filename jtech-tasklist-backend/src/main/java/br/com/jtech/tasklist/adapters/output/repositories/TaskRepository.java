package br.com.jtech.tasklist.adapters.output.repositories;

import br.com.jtech.tasklist.adapters.output.repositories.entities.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, String> {
    List<TaskEntity> findByUserId(String userId);
    List<TaskEntity> findByTasklistId(String tasklistId);
    List<TaskEntity> findByUserIdAndTasklistId(String userId, String tasklistId);
    Optional<TaskEntity> findByIdAndUserId(String id, String userId);
}
