import { Component } from '@angular/core';

@Component({
  selector: 'app-table-row-context',
  templateUrl: './table-row-context.component.html',
  styleUrls: ['./table-row-context.component.scss']
})
export class TableRowContextComponent {

  displayedColumnsRowContext: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  dataRowContext: string[] = ['one', 'two', 'three', 'four', 'five'];

}
