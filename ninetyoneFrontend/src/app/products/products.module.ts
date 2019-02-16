import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTabsModule
  ]
})
export class ProductsModule { }
