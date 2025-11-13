import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasklist, TasklistRequest } from '../models/tasklist.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  private readonly API_URL = `${environment.apiUrl}/tasklists`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tasklist[]> {
    return this.http.get<Tasklist[]>(this.API_URL);
  }

  getById(id: string): Observable<Tasklist> {
    return this.http.get<Tasklist>(`${this.API_URL}/${id}`);
  }

  create(request: TasklistRequest): Observable<Tasklist> {
    return this.http.post<Tasklist>(this.API_URL, request);
  }

  update(id: string, request: TasklistRequest): Observable<Tasklist> {
    return this.http.put<Tasklist>(`${this.API_URL}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
