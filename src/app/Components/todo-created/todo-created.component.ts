import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {Todo, TodoServiceService} from '../../Services/todo-service.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

export interface TodoMas {
  todo: string;
}

@Component({
  selector: 'app-todo-created',
  templateUrl: './todo-created.component.html',
  styleUrls: ['./todo-created.component.scss']
})
export class TodoCreatedComponent implements OnInit {
  constructor(private todoService: TodoServiceService)  { }
  public addEdit: FormControl = new FormControl();
  public index;
  public todoMass: Observable<Todo[]>;
  toggle(index: number, todo: Todo){
    if (!todo.isEditable) {
      this.addEdit.patchValue(todo.text);
    }

    this.todoService.toggle(index, todo, this.addEdit.value);


  }

  ngOnInit(): void {
    this.todoMass = this.todoService.todoList;
  }
  onDelete(todo: Todo): void {
    this.todoService.delete(todo.id);
  }
  completed(todo: Todo): void {
  }

}
