import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFilterScheduleComponent } from './list-filter-schedule.component';


describe('ListFilterComponent', () => {
  let component: ListFilterScheduleComponent;
  let fixture: ComponentFixture<ListFilterScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilterScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
