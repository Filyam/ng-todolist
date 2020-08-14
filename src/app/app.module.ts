import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './Components/input-field/input-field.component';
import { MainTodoHelloComponent } from './Components/main-todo-hello/main-todo-hello.component';
import { TodoCreatedComponent } from './Components/todo-created/todo-created.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    MainTodoHelloComponent,
    TodoCreatedComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
