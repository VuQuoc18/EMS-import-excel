import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatetimePicker } from '../../../store/models/datetime-picker.i';

@Component({
  selector: 'brc-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
})
export class DatetimePickerComponent implements OnInit {
  @Input() inputDate: Date ;
  @Output() getDate: EventEmitter<any> = new EventEmitter<any>();
  value :string;
  constructor() {}

  ngOnInit(): void {
    if(this.inputDate)
      this.value = this.convertDate(this.inputDate);
  }

  onInput(data: String) {
    // TODO : use moment to format date
    this.getDate.emit(data+":00.000Z");
  }

  convertDate(data: Date) {
    return new Date(data.getTime() - data.getTimezoneOffset() * 60000)
      .toISOString();
  }
}
