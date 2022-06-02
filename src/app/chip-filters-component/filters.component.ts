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
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
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
