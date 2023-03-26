import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  questions: number = 1;
  totalQuestions = 3;

  constructor() { }

  nextQuestion() {
    this.questions++;
  }
}

