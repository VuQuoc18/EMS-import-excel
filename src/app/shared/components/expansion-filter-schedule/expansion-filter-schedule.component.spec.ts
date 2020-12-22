import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionFilterScheduleComponent } from './expansion-filter-schedule.component';

describe('ExpansionFilterScheduleComponent', () => {
  let component: ExpansionFilterScheduleComponent;
  let fixture: ComponentFixture<ExpansionFilterScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionFilterScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionFilterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
