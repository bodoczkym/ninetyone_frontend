import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormsModule, FormGroup, FormBuilder, Validators,
          FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Contact } from './../../../../contact';
import { MessageToStaffService } from './message-to-staff.service';
import { HttpClient } from '@angular/common/http';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-message-to-staff-dialog',
  templateUrl: './message-to-staff-dialog.component.html',
  styleUrls: ['./message-to-staff-dialog.component.css']
})

export class MessageToStaffDialogComponent implements OnInit {

  mailOptions: Contact;
  from: string;
  subj: string;
  tex: string;

  mailForm = this.fb.group({
    email: ['', [Validators.required]],
    subject: [''],
    text: ['']
  });
  @Input() sendingMail: Contact;
  @Output() save = new EventEmitter<Contact>();

  get email() { return this.mailForm.get('email'); }
  get subject() { return this.mailForm.get('subject'); }
  get text() { return this.mailForm.get('text'); }


  constructor(public dialogRef: MatDialogRef<MessageToStaffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private mailService: MessageToStaffService,
              private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.mailOptions = Object.assign(new Contact(), this.mailForm.value);
    this.from = this.mailOptions.email;
    this.subj = this.mailOptions.subject;
    this.tex = this.mailOptions.text;


    /*this.save.emit(
      Object.assign(new Note(), this.noteForm.value)
    );
    */


    /*this.mailService.sendMail(Object.assign(new Contact(), this.mailForm.value));*/
}

  /* TODO */
  send() {
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }


}
