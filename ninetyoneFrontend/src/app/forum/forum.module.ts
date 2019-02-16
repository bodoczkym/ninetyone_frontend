import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumListComponent } from './forum-list/forum-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ForumListComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    MatTabsModule
  ]
})
export class ForumModule { }
