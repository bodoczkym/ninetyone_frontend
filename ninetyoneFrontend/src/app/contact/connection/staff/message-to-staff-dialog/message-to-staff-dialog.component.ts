import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup, FormBuilder, Validators,
          FormControl, FormGroupDirective, NgForm } from '@angular/forms';


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

  email: string;
  subject: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(public dialogRef: MatDialogRef<MessageToStaffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  /* TODO */
  send() {
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
