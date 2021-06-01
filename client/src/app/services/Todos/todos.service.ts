import { Todo } from './../../interfaces/Todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
	private url = 'http://localhost:5000/api/todos'

  constructor(private http: HttpClient) {}

	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(this.url)
	}

}
