import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fusion-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
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
    { id: 1, value: '', default: 'Filter 1: All' },
    { id: 2, value: 'Filter 2: Active', default: 'Filter 2: Active' },
    { id: 3, value: 'Filter 3: Active', default: 'Filter 3: Active' },
    { id: 4, value: 'Filter 4: Active', default: 'Filter 4: Active' },
    { id: 5, value: 'Filter 5: All', default: 'Filter 5: All' },
    { id: 6, value: 'Filter 6: All', default: 'Filter 6: All' },
    { id: 7, value: 'Filter 7: All', default: 'Filter 7: All' },
  ];

  private onDestroy$ = new Subject<void>();

  ngOnInit() {
    this.formControl2.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        startWith({
          date: new Date(),
        })
      )
      .subscribe(
        (val) => (this.filtersContet[0].value = val?.date.toDateString())
      );
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  chipChanged($event) {
    console.log($event);
    $event.forEach((filter) => {
      if (filter.id >= 5 && filter.id <= 7) {
        this.filtersContet[
          filter?.id - 1
        ].value = `${filter?.value?.startDate.toDateString()} - ${filter?.value?.endDate.toDateString()}`;
      }
    });
  }

  removeChip($event) {
    console.log($event);
    this.filtersContet.forEach((content) => {
      const isSelected = $event.some((selected) => selected.id === content.id);
      if (!isSelected && content.id >= 5 && content.id <= 7) {
        this.filtersContet[content.id - 1].value =
          this.filtersContet[content.id - 1].default;
      }
    });
    this.formControl.reset();
  }
}
