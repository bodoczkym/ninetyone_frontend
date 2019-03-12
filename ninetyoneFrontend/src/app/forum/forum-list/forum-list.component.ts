import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForumService } from './forum.service';
import { Question } from './../../Question';
import { Comment } from './../../Comment';



@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit, OnChanges {

  questions: Question[];
  comments: Comment[];

  forumForm = this.fb.group({
    name: ['', [Validators.required]],
    question: [''],
    description: ['']
  });
  /* @Input() question: Question;
   @Output() save = new EventEmitter<Note>();*/

  get name() { return this.forumForm.get('name'); }
  get question() { return this.forumForm.get('question'); }
  get description() { return this.forumForm.get('description'); }


  commentForm = this.fb.group({
    commentName: ['', [Validators.required]],
    comment: ['']
  });
  get commentName() { return this.forumForm.get('commentName'); }
  get comment() { return this.forumForm.get('comment'); }


  constructor(private fb: FormBuilder,
              private forumService: ForumService) { }


  async ngOnInit() {
    this.questions = await this.forumService.getQuestions();
    this.comments = await this.forumService.getComments();
  }

  ngOnChanges() {
    /* this.forumService.patchValue(this.questions);*/
  }

  onSubmit() {
    this.forumService.addQuestion(Object.assign(new Question(), this.forumForm.value));
  }

  sendComment(i: string) {
    this.forumService.addComment(Object.assign(new Comment(i), this.commentForm.value));
  }


}
