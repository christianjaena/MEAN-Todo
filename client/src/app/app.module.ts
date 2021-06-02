import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoInputComponent } from './components/add-todo-input/add-todo-input.component';

import { TodosService } from './services/Todos/todos.service';

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoInputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
