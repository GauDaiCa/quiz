import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  
 
  public questions: Quiz[] | undefined
  public answers: number[] = []

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.questions = this.quizService.getQuizzes()
    this.questions.forEach((_question, index) => {
      this.answers[index] = 0;
    })
    console.log('Data', this.questions);

   
  }
  public test(): void {
    console.log('Question', this.questions);
    console.log('Answer', this.answers);
  }

}
