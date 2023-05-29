import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
