import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
