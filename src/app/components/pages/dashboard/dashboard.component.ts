import * as EnumsValues from '../../../enums/enums';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  languageKey: number;
  questions: Array<any>;
  bindObject: any;
  
  
  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.bindObject = {
      valueOne: null,
      valueTwo: null,
      valueThree: null,
    };
    this.languageKey = 1;

    let rangeEnum = EnumsValues.range100in4;
    this.questions = [
      {
        question: 'Please let us know what you think about this',
        answers: null,
        questionType: 1,
        extraInfo: null,
        bindTo: 'valueOne',
        index: 0
      },
      {
        question: 'Please let us know in what range you are',
        questionType: 'rangeSelection',
        answers: rangeEnum,
        extraInfo: null,
        bindTo: 'valueTwo',
        index: 1
      },
      {
        question: 'Please let us know what score you give us',
        questionType: 'scoreSlider',
        extraInfo: null,
        bindTo: 'valueThree',
        index: 2
      },
    ];
    console.log(this.questions);
  }

}
