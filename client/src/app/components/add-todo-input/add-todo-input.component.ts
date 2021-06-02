import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-input',
  templateUrl: './add-todo-input.component.html',
  styleUrls: ['./add-todo-input.component.css']
})
export class AddTodoInputComponent implements OnInit {
	@Input() buttonAction: string = "Click";
	@Output() submitInput = new EventEmitter<string>();
	inputDescription?: string = ''

  constructor() { }

  ngOnInit() {
  }

	onSubmit() {
		this.submitInput.emit(this.inputDescription)
		this.inputDescription = ''
	}


}
