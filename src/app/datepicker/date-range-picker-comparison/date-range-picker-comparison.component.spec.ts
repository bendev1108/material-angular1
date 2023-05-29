import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerComparisonComponent } from './date-range-picker-comparison.component';

describe('DateRangePickerComparisonComponent', () => {
  let component: DateRangePickerComparisonComponent;
  let fixture: ComponentFixture<DateRangePickerComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickerComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangePickerComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
