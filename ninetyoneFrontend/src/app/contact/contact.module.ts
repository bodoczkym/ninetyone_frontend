import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConnectionComponent } from './connection/connection.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { StaffComponent } from './connection/staff/staff.component';
import { JobsComponent } from './connection/jobs/jobs.component';
import { InfoComponent } from './connection/info/info.component';
import { NoteComponent } from './connection/note/note.component';
import { MessageToStaffDialogComponent } from './connection/staff/message-to-staff-dialog/message-to-staff-dialog.component';
import { RateComponent } from './connection/staff/rate/rate.component';

// Rating
import { BarRatingModule } from '../../../../../../ninetyone/ninetyone_frontend/ninetyoneFrontend/node_modules/ng2-bar-rating';
import { StarRatingModule } from '../../../node_modules/angular-star-rating';

// Google Maps
import { AgmCoreModule  } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    MatListModule,
    /* Rating */
    BarRatingModule,
    StarRatingModule.forRoot(),
    /* Google Maps */
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAiF0cW5o63RYvRx0cWtz-sHpeaTn0Ci0'
    }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    MessageToStaffDialogComponent,
    RateComponent
  ]
})
export class ContactModule { }
