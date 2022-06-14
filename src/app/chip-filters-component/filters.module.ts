import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange';
import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
import { ChipFiltersModule } from '@ironsource/fusion-ui/components/chip-filters';
import { FiltersComponent } from './filters.component';
import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import { DropdownModule } from '@ironsource/fusion-ui/components/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DaterangeModule,
    ChipFilterModule,
    ChipFiltersModule,
    TooltipModule,
    IconModule,
    DropdownDualMultiSelectModule,
    DropdownModule,
  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
