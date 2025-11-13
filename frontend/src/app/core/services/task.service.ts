import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, CreateTaskRequest, UpdateTaskRequest } from '../models/task.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly API_URL = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  getByTasklist(tasklistId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/tasklist/${tasklistId}`);
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/${id}`);
  }

  create(request: CreateTaskRequest): Observable<Task> {
    return this.http.post<Task>(this.API_URL, request);
  }

  update(id: string, request: UpdateTaskRequest): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
