import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConnectionComponent } from './connection/connection.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { StaffComponent } from './connection/staff/staff.component';
import { JobsComponent } from './connection/jobs/jobs.component';
import { InfoComponent } from './connection/info/info.component';
import { NoteComponent } from './connection/note/note.component';
import { MessageToStaffDialogComponent } from './connection/staff/message-to-staff-dialog/message-to-staff-dialog.component';
import { RateComponent } from './connection/staff/rate/rate.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from '../../../../../../ninetyone/ninetyone_frontend/ninetyoneFrontend/node_modules/ng2-bar-rating';
import { StarRatingModule } from '../../../node_modules/angular-star-rating';

@NgModule({
  declarations: [
    ConnectionComponent,
    StaffComponent,
    JobsComponent,
    InfoComponent,
    NoteComponent,
    MessageToStaffDialogComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    /*Material*/
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    /*Http*/
    HttpClientModule,
    BarRatingModule,
    StarRatingModule.forRoot()
  ],
  entryComponents: [
    MessageToStaffDialogComponent,
    RateComponent
  ]
})
export class ContactModule { }
