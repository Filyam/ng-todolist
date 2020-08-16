import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
export interface Todo {
  id: number;
  text: string;
  isEditable?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
public  todoList = new BehaviorSubject<Todo[]>([]);
  constructor() { }
public add(text: string) {

    this.todoList.next([...this.todoList.getValue(), {text, id: Date.now(), isEditable: false }]);
}
public delete( id: number) {
    const deleted = this.todoList.getValue().filter(todo => todo.id !== id);
    this.todoList.next(deleted);
}
public toggle(index: number, todo: Todo, addEdit?: string) {
  if (!todo.isEditable) {
    this.todoList.getValue().map((item, i) =>  {
      item.isEditable = false;
    });
    this.todoList.getValue()[index].isEditable = !this.todoList.getValue()[index].isEditable;
  } else {
    this.todoList.getValue()[index].isEditable = !this.todoList.getValue()[index].isEditable;
  }

  this.todoList.getValue()[index].text = addEdit;
  this.todoList.next([...this.todoList.getValue()]);
}
}

