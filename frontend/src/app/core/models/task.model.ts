export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  tasklistId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  tasklistId: string;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}
