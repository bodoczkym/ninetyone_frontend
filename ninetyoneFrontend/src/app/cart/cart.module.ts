import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { DeleteComponent } from './cart/delete/delete.component';

@NgModule({
  declarations: [CartComponent, DeleteComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  entryComponents: [
    DeleteComponent
  ],
})
export class CartModule { }
