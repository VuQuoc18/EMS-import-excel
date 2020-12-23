import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ImportPageComponent } from './import-excel-page.component';
import { ImportPageRouter } from './import-excel-page-routing.module';
import { ImportExcelListModule } from 'src/app/shared/components/list-detail-excel/list-detail-excel.module';

@NgModule({
  declarations: [ImportPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ImportPageRouter,
    ImportExcelListModule
  ],
  exports: [ImportPageComponent],
})
export class ImportPageModule {}
