import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos/:id', component: TodoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
