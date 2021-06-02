import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
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
