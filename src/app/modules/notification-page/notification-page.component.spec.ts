import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationPageComponent } from './notification-page.component';

describe('NotificationPageComponent', () => {
  let component: NotificationPageComponent;
  let fixture: ComponentFixture<NotificationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
