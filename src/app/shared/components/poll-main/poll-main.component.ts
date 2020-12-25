import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { addTodoValue } from '../../../store/models/addtodo.i';
import { configButton } from '../../../store/models/button.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
@Component({
  selector: 'brc-poll-main',
  templateUrl: './poll-main.component.html',
  styleUrls: ['./poll-main.component.scss']
})
export class PollMainComponent implements OnInit {
  @Input() LabelTodoName: LabelInterface = {
    content: "Question",
    size: 15,
    color: "",
    backgroundColor: ""
  }
  @Input() LabelCategory: LabelInterface = {
    content: "Expiration",
    size: 15,
    color: "",
    backgroundColor: ""
  }
  @Input() LabelDatePicker: LabelInterface = {
    content: "Response",
    size: 15,
    color: "",
    backgroundColor: ""
  }
  @Input() LabelImportance: LabelInterface = {
    content: "Importance",
    size: 15,
    color: "",
    backgroundColor: ""
  }
  @Input() LabelDescription: LabelInterface = {
    content: "Description",
    size: 15,
    color: "",
    backgroundColor: ""
  }
  @Input() placeholder: string = "Todo Description"
  @Input() labelCategory: string = "Expiration";
  @Input() labelImportance: string = "Importance";
  @Input() configButtonAdd: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'Basic',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'Add Todo!',
  }
  @Input() configButtonCancel: configButton = {
    colorButton: 'warn',
    colorMouseOver: 'Basic',
    colorMouseOut: 'warn',
    type: 'submit',
    text: 'Cancel!',
  }
  labelHeader: LabelInterface = {
    content: 'Poll',
    size: 30,
    color: 'black',
    backgroundColor: 'while',
  };
  getToDate(data) {
    this.valueGetToDate = data;
  }
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 834) {
      this.colSpan= 2;
      this.LabelCategory.size = 15;
      this.LabelTodoName.size = 15;
      this.LabelDatePicker.size = 15;
      this.LabelImportance.size = 15;
      this.LabelDescription.size = 15;
    }
    else {
      this.colSpan = 4;
      this.LabelCategory.size = 12;
      this.LabelTodoName.size = 12;
      this.LabelDatePicker.size = 12;
      this.LabelImportance.size = 12;
      this.LabelDescription.size = 12;
    }
  }
  public todoName: string;
  public todoCategory: number;
  public todoDatePicker: string;
  public todoImportant: string;
  public todoDescription: string;
  public userId : number =1;
  public colSpan: number = 2;
  public valueGetToDate: string = '';
  @Input() CategoryArray: LabelledValue<string>[] = [];
  @Input() ImportanceArray: LabelledValue<string>[] = [];
  @Output() addTodo = new EventEmitter();
  @Output() cancelTodo = new EventEmitter();
  onsubmit() {
    let addTodoModel: addTodoValue = {
      todoName: this.todoName,
      todoCategoryId: this.todoCategory,
      deadline: this.valueGetToDate === ''
      ? undefined
      : this.valueGetToDate+"T00:00:00.000Z",
      importance: this.todoImportant,
      description: this.todoDescription,
      userId : this.userId,
    };
    this.addTodo.emit(addTodoModel);
  }
  changeValueTodo(data : string){
    this.todoName = data;
  }
  cancel(){
    this.cancelTodo.emit('/todo');
  }
  setCategory(Category: string) {
    this.todoCategory = Number(Category);
  }
  setImportant(Important: string) {
    this.todoImportant = Important;
  }
  setDatePicker(datePicker: string) {
    this.todoDatePicker = datePicker;
  }
  setDescription(description: string) {
    this.todoDescription = description;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 1000) {
      this.colSpan= 2;
      this.LabelCategory.size = 15;
      this.LabelTodoName.size = 15;
      this.LabelDatePicker.size = 15;
      this.LabelImportance.size = 15;
      this.LabelDescription.size = 15;
    }
    else {
      this.colSpan = 4;
      this.LabelCategory.size = 12;
      this.LabelTodoName.size = 12;
      this.LabelDatePicker.size = 12;
      this.LabelImportance.size = 12;
      this.LabelDescription.size = 12;
    }
  }
}
