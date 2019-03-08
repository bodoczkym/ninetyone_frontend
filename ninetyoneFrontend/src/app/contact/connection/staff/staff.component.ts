import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageToStaffDialogComponent } from './message-to-staff-dialog/message-to-staff-dialog.component';
import { RateComponent } from './rate/rate.component';
import { StaffService } from './staff.service';
import { User } from './../../../User';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  users: User[];

  constructor(public dialog: MatDialog,
              private userService: StaffService) { }

  async ngOnInit() {
        this.users = await this.userService.getUsers();
  }

  message(emailAddress: string): void {
    const dialogRef1 = this.dialog.open(MessageToStaffDialogComponent, {
    });

    console.log(emailAddress);

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The message dialog was closed');
    });
  }

  rate(): void {
    const dialogRef2 = this.dialog.open(RateComponent, {

    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The rate dialog was closed');
    });
  }

}

