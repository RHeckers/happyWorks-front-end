import * as EnumsValues from '../../../enums/enums';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-feedback-screen',
  templateUrl: './feedback-screen.component.html',
  styleUrls: ['./feedback-screen.component.scss']
})
export class FeedbackScreenComponent implements OnInit {

  @ViewChild('feedbackBody') feedbackBody: ElementRef;
  @Input() startAt;
  @Input() bindObject;
  @Input() set questions(questions: Array<any>) {
    this.allQuestions = questions;
    !this.startAt ? this.startAt = this.getFirstIndex() : this.startAt = this.startAt;
    this.currentQuestionIndex = this.startAt;
    console.log(this.allQuestions);
    this.setQuestion();
  }
  allQuestions: Array<any>;
  currentQuestionIndex: number;
  currentQuestion: any;
  validSelection: boolean;
  questionsFinished: boolean;
  enumValues: any;

  languageKey = 1;

  constructor() { }

  ngOnInit() {
    this.enumValues = EnumsValues;
  
  }

  answareSelected(selectedValues) {
    this.bindObject[this.currentQuestion.bindTo] = selectedValues.enumIndex;
    this.validSelection = true;
  }

  confirmQuestion() {
    this.feedbackBody.nativeElement.style.opacity = '0';
    // Wait for annimation
    setTimeout(() => {
      this.nextQuestion();
      this.feedbackBody.nativeElement.style.opacity = '1';
    }, 250);

  }

  prevQuestion() {
    const firstIndex = this.getFirstIndex();
    if (this.currentQuestionIndex > firstIndex) {
      if (!this.questionsFinished) {
        this.currentQuestionIndex--; 
      }
      this.questionsFinished = false;
      this.setQuestion();
      this.checkIfValidValue();
    }
  }

  nextQuestion() {
    const last = this.getLastIndex();
    if (this.currentQuestionIndex < last) {
      this.currentQuestionIndex++; 
      this.setQuestion();
      this.checkIfValidValue();
    } else {
      this.questionsFinished = true;
    }
  }

  checkIfValidValue () {
    this.bindObject[this.currentQuestion.bindTo] ? this.validSelection = true : this.validSelection = false;
    this.bindObject[this.currentQuestion.bindTo] !== null ? this.validSelection = true : this.validSelection = false;
  }

  completeFeedback() {

  }

  getFirstIndex() {
    let index = 999999999999999999999;
    this.allQuestions.forEach(val => {
      if (val.index < index) {
        index = val.index
      }
    });
    return index;
  }

  getLastIndex() {
    let index = 0;
    this.allQuestions.forEach(val => {
      val.index > index ? index = val.index : index = index;
    });
    return index;
  }

  setQuestion() {
    this.currentQuestion = this.allQuestions.find(question => question.index === this.currentQuestionIndex);
  }

  skipToLast() {
    this.currentQuestionIndex = this.getLastIndex();
    this.setQuestion();
  }

  backToFirst() {
    this.currentQuestionIndex = this.getFirstIndex();
    this.setQuestion();
  }

}
