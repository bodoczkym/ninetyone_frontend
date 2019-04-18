import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormsModule, FormGroup, FormBuilder, Validators,
  FormControl, FormGroupDirective, NgForm
} from '@angular/forms';
import { Contact } from './../../../../contact';
import { MessageToStaffService } from './message-to-staff.service';
import { HttpClient } from '@angular/common/http';
import nodemailer from 'nodemailer';
import { AuthService2 } from './../../../../auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
/*
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-message-to-staff-dialog',
  templateUrl: './message-to-staff-dialog.component.html',
  styleUrls: ['./message-to-staff-dialog.component.css']
})

export class MessageToStaffDialogComponent implements OnInit {

  // nodemailer = require('nodemailer');

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
              private http: HttpClient,
              private authService: AuthService2) { }

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
/*
  // async..await is not allowed in global scope, must use a wrapper
  async mail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.authService.user, // generated ethereal user
        pass: this.authService.bcryptPassword // generated ethereal password
      }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    });

    console.log('"Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }*/


}
