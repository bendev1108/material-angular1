import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

/** @title Date range picker comparison ranges */

@Component({
  selector: 'app-date-range-picker-comparison',
  templateUrl: './date-range-picker-comparison.component.html',
  styleUrls: ['./date-range-picker-comparison.component.scss']
})
export class DateRangePickerComparisonComponent {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}
