import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule,FloatLabelType } from '@angular/material/form-field';
import { FormControl, Validators, FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule,
    NgIf, MatIconModule,MatSelectModule,MatCheckboxModule,MatRadioModule],
})
export class FormFieldComponent {

  colorControl = new FormControl('primary' as ThemePalette);
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
