import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { configButton } from 'src/app/store/models/button.i';
import { Category } from 'src/app/store/models/category.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { LabelledValue } from 'src/app/store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from 'src/app/store/models/schedule-filter.i';
import { FilterSchedule } from 'src/app/store/models/schedule.i';

@Component({
  selector: 'brc-expansion-filter-schedule',
  templateUrl: './expansion-filter-schedule.component.html',
  styleUrls: ['./expansion-filter-schedule.component.scss']
})
export class ExpansionFilterScheduleComponent implements OnInit {
  //Input filter
  @Input() buttonFilterSchedule: ButtonFilterSchedule<configButton>;
  @Input() labelScheduleFilter: LabelFilterSchedule<LabelInterface>;
  @Input() placeholderFilterSchedule: PlaceholderFilterSchedule = {
    placeholderSearch: 'search schedule...',
    titleImportance: 'Importance',
    titleCategory: 'Category',
  };
  @Input() scheduleDataCategory: Category[];
  @Input() scheduleDataImportance: LabelledValue<string>[];
  @Output() valueFilter = new EventEmitter();
  scheduleValueFilter(data: FilterSchedule) {
    this.valueFilter.emit(data);
  }
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
