import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { DatetimePickerComponent } from './datetime-picker.component';
@NgModule({
  declarations: [
    DatetimePickerComponent,
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
  ],
  exports: [
    DatetimePickerComponent,
  ],
})
export class DatetimePickerModule {}
