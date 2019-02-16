import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumListComponent } from './forum-list/forum-list.component';

const routes: Routes = [
  {
    path: '',
    component: ForumListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
