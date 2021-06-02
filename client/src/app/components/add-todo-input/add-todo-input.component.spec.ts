/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddTodoInputComponent } from './add-todo-input.component';

describe('AddTodoInputComponent', () => {
  let component: AddTodoInputComponent;
  let fixture: ComponentFixture<AddTodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
