import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatedComponent } from './todo-created.component';

describe('TodoCreatedComponent', () => {
  let component: TodoCreatedComponent;
  let fixture: ComponentFixture<TodoCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
