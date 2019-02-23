import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-to-staff-dialog',
  templateUrl: './message-to-staff-dialog.component.html',
  styleUrls: ['./message-to-staff-dialog.component.css']
})

export class MessageToStaffDialogComponent implements OnInit {

  email: string;
  subject: string;

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
