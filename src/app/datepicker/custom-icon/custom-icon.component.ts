import {Component, ViewEncapsulation} from '@angular/core';
import {MatCalendarCellClassFunction, MatDatepickerInputEvent} from '@angular/material/datepicker';

/** @title Datepicker with custom date classes */

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomIconComponent {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
