import { Component, Input, OnInit } from '@angular/core';
import { LabelInterface } from '../../../store/models/label.i';

@Component({
  selector: 'brc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() label: LabelInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
