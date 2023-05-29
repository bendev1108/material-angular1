/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


/**
 * @title Stepper animations
 */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StepperComponent {

  firstFormGroup1 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup1 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  firstFormGroup2 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
