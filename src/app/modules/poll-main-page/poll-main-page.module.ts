import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollMainPageRouter } from './poll-main-page-routing.module';
import { PollMainPageComponent } from './poll-main-page.component';
@NgModule({
  declarations: [PollMainPageComponent],
  imports: [
    CommonModule,PollMainPageRouter

  ],
  exports: [PollMainPageComponent]
})
export class PollMainPageModule { }