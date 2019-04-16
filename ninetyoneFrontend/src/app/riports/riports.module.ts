import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiportsRoutingModule } from './riports-routing.module';
import { RiportsComponent } from './riports/riports.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [RiportsComponent],
  imports: [
    CommonModule,
    RiportsRoutingModule,
    MatRadioModule,
    FormsModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class RiportsModule { }
