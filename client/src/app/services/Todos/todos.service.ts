import { Todo } from './../../interfaces/Todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private url = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }

  addTodo(todoDescription: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todoDescription, httpOptions);
  }
}
