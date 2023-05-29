import { Component } from '@angular/core';

interface Transaction {
  item: string;
  cost: number;
}

/**
 * @title Footer row table
 */

@Component({
  selector: 'app-table-footer-row',
  templateUrl: './table-footer-row.component.html',
  styleUrls: ['./table-footer-row.component.scss']
})
export class TableFooterRowComponent {

  displayedColumnsFooterRow: string[] = ['item', 'cost'];
  transactionsFooterRow: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactionsFooterRow.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
