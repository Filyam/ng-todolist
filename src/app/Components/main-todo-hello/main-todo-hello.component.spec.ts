import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodoHelloComponent } from './main-todo-hello.component';

describe('MainTodoHelloComponent', () => {
  let component: MainTodoHelloComponent;
  let fixture: ComponentFixture<MainTodoHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTodoHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodoHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
