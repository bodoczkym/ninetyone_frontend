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

  navLinks = [
    {
      label: 'Contact info',
      link: '../info',
      index: 0
    },
    {
      label: 'Apply for job',
      link: '../jobs',
      index: 1
    },
    {
      label: 'Staff',
      link: '../staff',
      index: 2
    },
    {
      label: 'Send note about the website',
      link: '../note',
      index: 3
    }
  ];

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

