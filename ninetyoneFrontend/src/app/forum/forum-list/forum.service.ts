import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from '../../auth.service';
import 'rxjs/add/operator/map';
import { Question } from './../../Question';
import { Comment } from './../../Comment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private questionUrl = 'http://localhost:8080/questions';
  private commentnUrl = 'http://localhost:8080/questions/comments';

  constructor(private http: HttpClient) { }

  getQuestion(id: number): Promise<Question> {
    return this.http.get<Question>(`${this.questionUrl}/${id}`).toPromise();
  }

  getQuestions(): Promise<Question[]> {
    return this.http.get<Question[]>(
      this.questionUrl,
      httpOptions
    ).toPromise();
  }

  deleteQuestion(id: number) {
    return this.http.delete<Question>(
      `${this.questionUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  addQuestion(question: Question): Promise<Question> {
    return this.http.post<Question>(
      this.questionUrl,
      question,
      httpOptions
    ).toPromise();
  }

  getComment(id: number): Promise<Comment> {
    return this.http.get<Comment>(`${this.commentnUrl}/${id}`).toPromise();
  }

  getComments(): Promise<Comment[]> {
    return this.http.get<Comment[]>(
      this.commentnUrl,
      httpOptions
    ).toPromise();
  }

  deleteComment(id: number) {
    return this.http.delete<Comment>(
      `${this.commentnUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  addComment(comment: Comment): Promise<Comment> {
    console.log(comment);
    return this.http.post<Comment>(
      this.commentnUrl,
      comment,
      httpOptions
    ).toPromise();
  }
}
