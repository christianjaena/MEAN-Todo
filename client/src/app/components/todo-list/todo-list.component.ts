import { Component, OnInit } from '@angular/core';

import { TodosService } from './../../services/Todos/todos.service';

import { Todo } from './../../interfaces/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList?: Todo[];
  buttonActionText: string = 'Add Todo';
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService
      .getTodos()
      .subscribe((todos: Todo[]) => (this.todoList = todos));
  }

  deleteTodo(id: string) {
    this.todosService
      .deleteTodo(id)
      .subscribe((deletedTodo) => console.log(deletedTodo));
  }

  addTodo(description: string) {
    this.todosService
      .addTodo({ description } as Todo)
      .subscribe((newTodo) => this.todoList?.push(newTodo));
  }
}
