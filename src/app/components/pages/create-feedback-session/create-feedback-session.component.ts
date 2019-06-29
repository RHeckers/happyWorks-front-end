import { FeedbackSessions } from './../../../interfaces/feedbackSession';
import { GlobalService } from './../../../services/global.service';
import * as EnumsValues from '../../../enums/enums';
import { apiURIs } from '../../../../assets/apiURI';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-feedback-session',
  templateUrl: './create-feedback-session.component.html',
  styleUrls: ['./create-feedback-session.component.scss']
})
export class CreateFeedbackSessionComponent implements OnInit {

  languageKey: number = 1;
  apiURIValues = apiURIs
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
  createCustomAnswersForm = new FormGroup({
    answerGroupTitle: new FormControl(null, Validators.required),
    answareTitle: new FormControl(null, Validators.required)
  });
  showExcistingQuestionsForm: boolean;
  currentQuestion: any;
  createCurstomAnswers: boolean;
  createNewAnswers: boolean;
  newAnswers: any[];
  currentNewAnswer: string;
  createdAnswersID: string;
  customQuestionGroupTitle: string = '';
  currentSelectedQuestionType: any;



  constructor(private globalService: GlobalService, private httpService: HttpService) { }

  ngOnInit() {
    this.languageKey = 1;
    this.questionTypes = EnumsValues[`questionTypes${this.languageKey}`];
    this.questionTypes = this.globalService.mapEnumValuesToArray(this.questionTypes);
    console.log(this.questionTypes);
  }

  checkIfShowAddQuestionForm(createNew) {
    this.currentSelectedQuestionType = this.createFeedbackSessionForm.value.questionType
    if (createNew !== undefined) {
      this.addOrExcistingSelected = createNew;
    }
    if (this.createFeedbackSessionForm.valid) {
      if (this.addOrExcistingSelected) {
        console.log(this.questions);
        this.showAddQuestionForm = true
        if (!this.questions) {
          this.currentQuestionIndex = 0;
          this.questions = [{
            question: '',
            answers: undefined,
            questionType: this.currentSelectedQuestionType,
            extraInfo: null,
            bindTo: 'question1',
            index: this.currentQuestionIndex
          }]
          this.currentQuestion = this.questions[this.currentQuestionIndex];
        } else {
          this.currentQuestionIndex++;
          this.questions.push({
            question: '',
            answers: undefined,
            questionType: this.currentSelectedQuestionType,
            extraInfo: null,
            bindTo: 'question1',
            index: this.currentQuestionIndex
          });
          this.currentQuestion = this.questions[this.currentQuestionIndex]; 
          console.log(this.currentQuestion);
        }
      } else if (this.addOrExcistingSelected === false) {
        this.showExcistingQuestionsForm = true
      }
    }
  }

  toggleDefaultanswers() {
    if (this.currentQuestion.answers && this.createCurstomAnswers) {
      let defaultanswers = EnumsValues[`multipleChoiseDefaultanswers`];
      defaultanswers = this.globalService.mapEnumValuesToArray(defaultanswers[this.languageKey - 1]);
      this.currentQuestion.answers = defaultanswers;
      this.createCurstomAnswers = false;
    } else {
      this.currentQuestion.answers = [];
      this.createCurstomAnswers = true;
    }
  }

  createCutsomAnswers() {
    this.createNewAnswers = true;
    this.newAnswers = [];
    this.currentQuestion.answers = this.newAnswers;
    this.currentNewAnswer = '';
  }

  removeAnswer(index) {
    console.log(index);
    this.newAnswers.splice(index, 1);
  }

  addAnswer() {
    this.newAnswers.push({enumValue: this.currentNewAnswer, enumIndex: this.newAnswers.length + 1});
    this.currentNewAnswer = '';
  }

  answerPositionChange(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.newAnswers, event.previousIndex, event.currentIndex);
  }

  saveNewCustomAnswers() {
    const answers = [];
    const requestObj = {}
    const objToPush = {}
    for (let i = 0; i < this.newAnswers.length; i++) {
      const answer = this.newAnswers[i];
      objToPush[answer.enumIndex] = answer.enumValue;      
    }
    answers.push(objToPush);
    requestObj['title'] = this.customQuestionGroupTitle;
    requestObj['answers'] = answers;
    this.httpService.makePostRequest(this.apiURIValues.createMultipleChoiseAnswers, requestObj)
      .subscribe(answers => {
        this.newAnswers = undefined;
        this.createCurstomAnswers = false;
        this.createNewAnswers = false;
        this.createdAnswersID = answers.answersGroup._id;
        this.customQuestionGroupTitle = '';
        console.log(answers);
    });
  }

  saveQuestion() {
    let requestObj = {...this.currentQuestion};
    requestObj['answers'] = this.createdAnswersID;
    console.log(requestObj);
    this.httpService.makePostRequest(this.apiURIValues.createQuestion, requestObj).subscribe(val => {
      this.showAddQuestionForm = false;
      this.addOrExcistingSelected = undefined;
      this.currentSelectedQuestionType = null;
    });
  }

}
