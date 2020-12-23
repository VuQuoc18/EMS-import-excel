import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExcelPageComponent } from './add-excel-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddExcelPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExcelPageRouter {}
