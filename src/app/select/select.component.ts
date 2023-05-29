import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

interface Animal {
  name: string;
  sound: string;
}

/**
 * @title Select in a form
 */

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {

  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  panelColor = new FormControl('red');

  selected = 'option2';

  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
}
