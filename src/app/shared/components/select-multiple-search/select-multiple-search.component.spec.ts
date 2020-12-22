import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleSearchComponent } from './select-multiple-search.component';

describe('SelectMultipleSearchComponent', () => {
  let component: SelectMultipleSearchComponent;
  let fixture: ComponentFixture<SelectMultipleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultipleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
