import { GlobalService } from './../../../services/global.service';
import * as EnumsNL from '../../../enums/enums';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choise-element',
  templateUrl: './multiple-choise-element.component.html',
  styleUrls: ['./multiple-choise-element.component.scss']
})
export class MultipleChoiseElementComponent implements OnInit {

  @Input() answares: any;
  @Input() existingValue: any;

  @Output() selectedAnsware = new EventEmitter<any>();

  languageKey: number;
  selected: number;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    console.log(this.answares);
    this.selected = this.existingValue;
    !this.languageKey ? this.languageKey = 1 : this.languageKey = this.languageKey;
    let defaultAnswares = EnumsNL[`multipleChoiseDefaultAnswares${this.languageKey}`];
    defaultAnswares = this.globalService.mapEnumValuesToArray(defaultAnswares);
    !this.answares ? this.answares = defaultAnswares : this.answares = this.globalService.mapEnumValuesToArray(this.answares);
  }

  setSelected(answare) {
    this.selected = answare.enumIndex;
    this.selectedAnsware.emit(answare);
  }

}
