import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollMainComponent } from './poll-main.component';

describe('AddTodoComponent', () => {
  let component: PollMainComponent;
  let fixture: ComponentFixture<PollMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
