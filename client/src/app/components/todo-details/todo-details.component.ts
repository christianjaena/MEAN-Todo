import { Todo } from './../../interfaces/Todo';
import { TodosService } from './../../services/Todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
	todo?: Todo;
  constructor(private route: ActivatedRoute, private todoService: TodosService) {}

	ngOnInit() {
		this.getTodoFromURL()
	}

	getTodoFromURL(): void {
		const id = String(this.route.snapshot.paramMap.get('id'))
		this.todoService.getTodo(id).subscribe(todo => this.todo = todo)
	}
}
