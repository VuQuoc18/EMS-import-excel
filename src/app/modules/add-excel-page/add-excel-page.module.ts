import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExcelPageComponent } from './add-excel-page.component';
import { AddExcelPageRouter } from './add-excel-page-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddExcelListModule } from 'src/app/shared/components/add-excel/add-excel.module';
@NgModule({
  declarations: [AddExcelPageComponent],
  imports: [CommonModule ,AddExcelListModule, AddExcelPageRouter,MatSnackBarModule],
  exports: [AddExcelPageComponent],
})
export class AddExcelPageModule {}
