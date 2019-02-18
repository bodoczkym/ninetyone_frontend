import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { StaffComponent } from './connection/staff/staff.component';
import { InfoComponent } from './connection/info/info.component';
import { NoteComponent } from './connection/note/note.component';
import { JobsComponent } from './connection/jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'availability',
    component: InfoComponent
  },
  {
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
