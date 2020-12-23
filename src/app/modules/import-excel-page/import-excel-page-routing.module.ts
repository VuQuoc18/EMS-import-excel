import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImportPageComponent } from './import-excel-page.component';

const routes: Routes = [
  {
    path: '',
    component: ImportPageComponent,
    children: [
      {
        path: '',
        component: ImportPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportPageRouter {}
