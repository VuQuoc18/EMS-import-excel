import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollDetailPageRouter } from './poll-detail-page-routing.module';
import { PollDetailPageComponent } from './poll-detail-page.component';
import { AddScheduleModule } from '../../shared/components/add-schedule/add-schedule.module';
@NgModule({
  declarations: [PollDetailPageComponent],
  imports: [
    CommonModule,PollDetailPageRouter,AddScheduleModule

  ],
  exports: [PollDetailPageComponent]
})
export class PollDetailPageModule { }