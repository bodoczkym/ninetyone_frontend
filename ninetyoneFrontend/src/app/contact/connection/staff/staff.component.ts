import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageToStaffDialogComponent } from './message-to-staff-dialog/message-to-staff-dialog.component';
import { RateComponent } from './rate/rate.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  message(): void {
    const dialogRef1 = this.dialog.open(MessageToStaffDialogComponent, {
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  rate(): void {
    const dialogRef2 = this.dialog.open(RateComponent, {

    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  async ngOnInit() {
  }

}

