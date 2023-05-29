import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
 //  Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  disabled = new FormControl(false);

  message = new FormControl('Info about the action');

  enabled = new FormControl(false);

  positionOptions1: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];


}
