import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConnectionComponent } from './connection/connection.component';

import { StaffComponent } from './connection/staff/staff.component';
import { JobsComponent } from './connection/jobs/jobs.component';
import { InfoComponent } from './connection/info/info.component';
import { NoteComponent } from './connection/note/note.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ConnectionComponent,
    StaffComponent,
    JobsComponent,
    InfoComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    /*Material*/
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ContactModule { }
