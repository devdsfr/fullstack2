export interface Tasklist {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TasklistRequest {
  name: string;
}
