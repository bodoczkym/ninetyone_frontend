import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NoteService } from '../note/note.service';
import { Note } from './../../../Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnChanges {

  notes: Note[];

  noteForm = this.fb.group({
    name: ['', [Validators.required]],
    text: ['']
  });
  @Input() note: Note;
  @Output() save = new EventEmitter<Note>();

  get name() { return this.noteForm.get('name'); }
  get text() { return this.noteForm.get('text'); }

  constructor(private fb: FormBuilder,
              private noteService: NoteService) { }

  async ngOnInit() {
    this.notes = await this.noteService.getNotes();
  }

  ngOnChanges() {
    this.noteForm.patchValue(this.note);
  }

  onSubmit() {
    /*this.save.emit(
      Object.assign(new Note(), this.noteForm.value)
    );
    */
    this.noteService.addNote(Object.assign(new Note(), this.noteForm.value));
}

}
