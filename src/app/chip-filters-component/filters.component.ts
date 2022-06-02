import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'fusion-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  formControl = new FormControl();
  formControl2 = new FormControl({
    date: new Date(),
  });

  optionsFilter = [
    { id: 2, displayText: 'Filter 2' },
    { id: 3, displayText: 'Filter 3' },
    { id: 4, displayText: 'Filter 4' },
  ];
  filter = 'Filter 1';
  filtersContet = [
    { id: 1, value: '' },
    { id: 2, value: 'Filter 2: Active' },
    { id: 3, value: 'Filter 3: Active' },
    { id: 4, value: 'Filter 4: Active' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
  ];

  ngOnInit() {
    this.formControl2.valueChanges
      .pipe(
        startWith({
          date: new Date(),
        })
      )
      .subscribe(
        (val) => (this.filtersContet[0].value = val?.date.toDateString())
      );
  }

  chipChanged($event) {
    console.log($event);
  }

  removeChip($event) {
    console.log($event);
    this.formControl.reset();
  }
}
