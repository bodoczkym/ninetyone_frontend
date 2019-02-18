import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConnectionComponent } from './connection/connection.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ConnectionComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatTabsModule
  ]
})
export class ContactModule { }
