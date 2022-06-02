import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fusion-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  formControl = new FormControl();
  formControl2 = new FormControl({
    startDate: new Date(),
    endDate: new Date(),
  });

  optionsFilter = [
    { id: 2, displayText: 'Option 2' },
    { id: 3, displayText: 'Option 3' },
    { id: 4, displayText: 'Option 4' },
  ];

  chipChanged($event) {
    console.log($event);
  }

  removeChip($event) {
    console.log($event);
    this.formControl.reset();
  }
}
