import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';
import { Subject } from 'rxjs';
import { MOK_APPLICATIONS } from './data';

@Component({
  selector: 'fusion-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  countries = [
    { id: 1, displayText: 'US' },
    { id: 2, displayText: 'AT' },
  ];

  applicationList: DropdownOption[] = MOK_APPLICATIONS.map((app) => {
    return {
      id: app.id,
      name: app.name,
      displayText: app.name,
      icon: app.platform.toLowerCase(),
      image: app.icon,
    };
  });

  optionsFilter = [{ id: 4, displayText: 'Filter 4' }];

  filtersContent = [
    { id: 1, value: 'Filter 1: All', default: 'Filter 1: All' },
    { id: 4, value: 'Filter 4: Active', default: 'Filter 4: Active' },
    { id: 5, value: 'Filter 5: All', default: 'Filter 5: All' },
    { id: 6, value: 'Filter 6: All', default: 'Filter 6: All' },
    { id: 7, value: 'Filter 7: All', default: 'Filter 7: All' },
  ];
  form: FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.generateFormGroup();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  isReachTotalData() {
    console.log('Data reached limit');
  }

  isSearchChanged(data: string) {
    console.log('Search key: ', data);
  }

  isViewChanged(data: boolean) {
    console.log('Overlay Open: ', data);
  }

  chipChanged($event) {
    console.log($event);
  }

  removeChip($event) {
    console.log($event);
  }

  private generateFormGroup() {
    return this.fb.group({
      date: {},
      applications: [],
      range: [],
      rangeTwo: [],
      countries: [],
    });
  }
}
