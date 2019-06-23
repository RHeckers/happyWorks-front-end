import { FeedbackSessions } from './../../../interfaces/feedbackSession';
import { GlobalService } from './../../../services/global.service';
import * as EnumsValues from '../../../enums/enums';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-feedback-session',
  templateUrl: './create-feedback-session.component.html',
  styleUrls: ['./create-feedback-session.component.scss']
})
export class CreateFeedbackSessionComponent implements OnInit {

  languageKey: number = 1;
  questions: Array<any>;
  addFormSessionObject: FeedbackSessions  = {
    sessionTitle: '',
    feedbackSessionQuestions: [],
    companyId: null
  };
  bindObject: any = {};
  questionTypes: Object[];
  addOrExcistingSelected: boolean;
  showAddQuestionForm: boolean;
  currentQuestionIndex: number;
  enumValues = EnumsValues;

  createFeedbackSessionForm = new FormGroup({
    sessionTitle: new FormControl(null, Validators.required),
    questionType: new FormControl(null, Validators.required)
  });
  addNewQuestionForm = new FormGroup({
    questionTitle: new FormControl(null, Validators.required)
  });
  showExcistingQuestionsForm: boolean;
  currentQuestion: any;
  createCustomQuestion: boolean;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.languageKey = 1;
    this.questionTypes = EnumsValues[`questionTypes${this.languageKey}`];
    this.questionTypes = this.globalService.mapEnumValuesToArray(this.questionTypes);
    console.log(this.questionTypes);
  }

  checkIfShowAddQuestionForm(createNew) {
    if (createNew !== undefined) {
      this.addOrExcistingSelected = createNew;
    }
    if (this.createFeedbackSessionForm.valid) {
      if (this.addOrExcistingSelected) {
        this.showAddQuestionForm = true
        if (!this.questions) {
          this.currentQuestionIndex = 0;
          this.questions = [{
            question: '',
            answares: undefined,
            questionType: this.createFeedbackSessionForm.value.questionType,
            extraInfo: null,
            bindTo: 'question1',
            index: this.currentQuestionIndex
          }]
          this.currentQuestion = this.questions[this.currentQuestionIndex];
        } else {
          this.currentQuestionIndex++;
          this.questions.push({
            question: '',
            answares: undefined,
            questionType: this.createFeedbackSessionForm.value.questionType,
            extraInfo: null,
            bindTo: 'question1',
            index: this.currentQuestionIndex
          });
          this.currentQuestion = this.questions[this.currentQuestionIndex]; 
        }
      } else if (this.addOrExcistingSelected === false) {
        this.showExcistingQuestionsForm = true
      }
    }
  }

  addQuestionFormChanged() {
    // this.questions[this.currentQuestionIndex].question = this.addNewQuestionForm.value.questionTitle;
  }

  toggleDefaultAnswares() {
    if (this.currentQuestion.answares && this.createCustomQuestion) {
      let defaultAnswares = EnumsValues[`multipleChoiseDefaultAnswares${this.languageKey}`];
      defaultAnswares = this.globalService.mapEnumValuesToArray(defaultAnswares);
      this.currentQuestion.answares = defaultAnswares;
      this.createCustomQuestion = false;
    } else {
      this.currentQuestion.answares = [];
      this.createCustomQuestion = true;
    }
    console.log(this.currentQuestion.answares);
  }

}
