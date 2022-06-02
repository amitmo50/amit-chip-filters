import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange';
import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
import { FiltersComponent } from './filters.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DaterangeModule,
    ChipFilterModule,
    ChipFiltersModule,
  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
