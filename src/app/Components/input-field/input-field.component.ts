import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Todo, TodoServiceService} from '../../Services/todo-service.service';
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  public addControl: FormControl = new FormControl();
  constructor(private todoService: TodoServiceService) { }
  ngOnInit(): void {
  }
  onAdd(): void {
    this.todoService.add(this.addControl.value);
  }
}
