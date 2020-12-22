import { Column, SortItem, SortType } from './../../../store/models/column.i';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'brc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor() { }
  // input and output
  @Input() columns: Column[] = [];
  @Input() dataSource: Object[] = [];
  @Input() showRowSelection: boolean = false;
  @Input() eventResetSort: Observable<void> = new Observable<void>();
  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();

  // init selection
  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Object>;
  isSelectedAll: boolean = false;

  // init sort collection
  sortMap: Map<string, SortType>;

  // method
  ngOnInit(): void {

    this.eventResetSort.subscribe(() => {
      this.columns.forEach((column) => {
        if (column.sort) {
          this.sortMap.set(column.dataIndex, SortType.none);
        }
      });
    })

    this.selection = new SelectionModel<Object>(
      this.allowMultiSelect,
      this.initialSelection
    );
    this.sortMap = new Map();

    this.columns.forEach((column) => {
      if (column.sort) {
        this.sortMap.set(column.dataIndex, SortType.none);
      }
    });
  }

  toggleSelection(row: Object) {
    this.selection.toggle(row);
    this.rowsSelected.emit(this.selection.selected);
  }

  toggleSelectionAll() {
    this.isSelectedAll
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));

    this.isSelectedAll = !this.isSelectedAll;
    this.rowsSelected.emit(this.selection.selected);
  }

  handlerClickRow(data: Object) {
    this.rowClicked.emit(data);
  }

  toggleSort(column: string) {
    console.log(column);
    if (this.sortMap.get(column)) {
      let sortType: SortType = this.sortMap.get(column);
      sortType === SortType.none
        ? this.sortMap.set(column, SortType.asc)
        : sortType === SortType.asc
          ? this.sortMap.set(column, SortType.desc)
          : this.sortMap.set(column, SortType.none);

      // set sort none other colums
      this.sortMap.forEach((value, key) => {
        console.log(key);
        if (key !== column) {
          this.sortMap.set(key, SortType.none);
        }
      });

      // init result
      let sortResult: SortItem[] = [];
      this.sortMap.forEach((value, key) => {
        sortResult.push({ name: key, sort: value });
      });
      // emit
      this.sort.emit(sortResult);
    }
  }

  isTextOverflow(elem: HTMLElement): boolean {
    return elem.offsetWidth < elem.scrollWidth;
  }
}
