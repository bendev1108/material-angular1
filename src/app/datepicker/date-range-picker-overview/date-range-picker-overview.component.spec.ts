import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerOverviewComponent } from './date-range-picker-overview.component';

describe('DateRangePickerOverviewComponent', () => {
  let component: DateRangePickerOverviewComponent;
  let fixture: ComponentFixture<DateRangePickerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickerOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangePickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
