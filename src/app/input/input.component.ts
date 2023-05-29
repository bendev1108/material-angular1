import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Input with error messages
 */

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  value = 'Clear me';
}
