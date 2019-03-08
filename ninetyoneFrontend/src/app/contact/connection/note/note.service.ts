import { Injectable } from '@angular/core';
import { Note } from './../../../Note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from '../../../auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { NoteComponent } from './note.component';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) { }

  getNote(id: number): Promise<Note> {
    return this.http.get<Note>(`${this.noteUrl}/${id}`).toPromise();
  }

  getNotes(): Promise<Note[]> {
    return this.http.get<Note[]>(
      this.noteUrl,
      httpOptions
    ).toPromise();
  }

  deleteNote(id: number) {
    return this.http.delete<Note>(
      `${this.noteUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  addNote(note: Note): Promise<Note> {
    return this.http.post<Note>(
      this.noteUrl,
      note,
      httpOptions
    ).toPromise();
  }

}

