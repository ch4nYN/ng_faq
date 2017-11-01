import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
questions:Question[];
  constructor() { 
    // this.questions = [{
    //   text: 'what is your name',
    //   answer: 'my name is brad',
    //   hide: true
    // },{
    //   text: 'what is your color',
    //   answer: 'red',
    //   hide: true
    // },{
    //   text: 'what is your langauage',
    //   answer: 'javascript',
    //   hide: true
    // }];
  }

  //get questions from the local storage
  getQuestion() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  //adds questions to local storage
  addQuestion(question:Question) {
    this.questions.unshift(question);
    //init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      //push new question
      questions.unshift(question);
      //set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      //add new question
      questions.unshift(question);
      //reset LS
      localStorage.setItem('questions', JSON.stringify(questions));

    }
  }
  //remove questions from local storage
  removeQuestion(question:Question) {
    for (let i = 0;i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
