import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { StaffComponent } from './connection/staff/staff.component';
import { NoteComponent } from './connection/note/note.component';
import { JobsComponent } from './connection/jobs/jobs.component';
import { AuthGuard } from './../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'staff',
    component: StaffComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'note',
    component: NoteComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'jobs',
    component: JobsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
