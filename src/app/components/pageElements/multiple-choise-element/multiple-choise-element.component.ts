import { GlobalService } from './../../../services/global.service';
import * as Enums from '../../../enums/enums';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choise-element',
  templateUrl: './multiple-choise-element.component.html',
  styleUrls: ['./multiple-choise-element.component.scss']
})
export class MultipleChoiseElementComponent implements OnInit {

  @Input() answers: any;
  @Input() existingValue: any;

  @Output() selectedAnsware = new EventEmitter<any>();

  languageKey: number;
  selected: number;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.selected = this.existingValue;
    !this.languageKey ? this.languageKey = 1 : this.languageKey = this.languageKey;
    let defaultanswers = Enums.multipleChoiseDefaultanswers;
    console.log(defaultanswers);
    defaultanswers = this.globalService.mapEnumValuesToArray(defaultanswers[this.languageKey - 1]);
    !this.answers ? this.answers = defaultanswers : this.answers = this.globalService.mapEnumValuesToArray(this.answers[this.languageKey - 1]);
  }

  setSelected(answare) {
    this.selected = answare.enumIndex;
    this.selectedAnsware.emit(answare);
  }

}
