import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageToStaffDialogComponent } from './message-to-staff-dialog/message-to-staff-dialog.component';
import { RateComponent } from './rate/rate.component';
import { StaffService } from './staff.service';
import { User } from './../../../User';
import { AuthService2 } from './../../../auth.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  users: User[];

  constructor(public dialog: MatDialog,
              private userService: StaffService,
              private authService: AuthService2) { }

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

  rate(user: User): void {
    this.userService.user = user;
    const dialogRef2 = this.dialog.open(RateComponent, {

    });
    console.log(user);
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The rate dialog was closed');
    });
  }

}

