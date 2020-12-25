import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column, SortItem } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, FilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { ScheduleList } from '../../../store/models/scheduleList.i';

@Component({
  selector: 'brc-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss'],
})
export class ScheduleListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

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
  //Input table
  @Input() scheduleColumns: Column[] = [];
  @Input() scheduleDataSource: Object[] = [];
  @Input() scheduleShowRowSelection: boolean = false;
  //Input pagination
  @Input() scheduleTotalRecords: number = 0;
  @Input() scheduleRecordsPerPage: number = 0;
  @Input() schedulePageIndex: number = 0;
  //Input todolist
  @Input() configScheduleList: ScheduleList = {
    filterBox: 'Filter Box',
    title: 'Poll List',
    btnAdd: 'Add Poll',
  };

  //Output filter
  @Output() valueFilter = new EventEmitter();
  //Output table
  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();
  //Output pagination
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  //Out put schedulelist
  @Output() btnAddSchedule: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageOnPageChange: EventEmitter<number> = new EventEmitter<number>();
  scheduleValueFilter(data: FilterSchedule) {
    this.valueFilter.emit(data);
  }
  handlerClickRow(data: Object) {
    this.rowClicked.emit(data);
  }
  handlerSort(data: SortItem[]) {
    this.sort.emit(data);
  }
  handlerSelectRow(data: Object) {
    this.rowsSelected.emit(data);
  }
  onClickBtnAdd() {
    this.btnAddSchedule.emit();
  }
  onPageEvent(data: number) {
    this.pageOnPageChange.emit(data);
  }
  dataSource = [
    { id: 1, scheduleName: '1', time: 'Giải đấu Liên Quân', category: '31/12/2020 17:30', description: 'In process', place: 'Phuong Dung', importance: ''},
    { id: 2, scheduleName: '2', time: 'Cuối tuần bạn muốn đi đâu?', category: '25/12/2020 11:30',  description: 'In process', place: 'Thach monus', importance: ''},
    { id: 3, scheduleName: '3', time: 'Tiệc Noel ăn gì?', category: '18/12/2020 17:30', description: 'In process', place: 'nc_nghi', importance: ''},
    { id: 4, scheduleName: '4', time: 'Teambuilding', category: '31/11/2020 17:30', description: 'Expired', place: 'Phuong Dung', importance: ''},
    { id: 5, scheduleName: '5', time: 'Mùa hè sôi động', category: '25/5/2020 17:30', description: 'Expired', place: 'Phuong Dung', importance: ''},
  ];
}
