import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { KitchenComponent } from './product-list/kitchen/kitchen.component';
import { LivingRoomComponent } from './product-list/living-room/living-room.component';
import { BedroomComponent } from './product-list/bedroom/bedroom.component';
import { BathroomComponent } from './product-list/bathroom/bathroom.component';
import { TechsComponent } from './product-list/techs/techs.component';

@NgModule({
  declarations: [ProductListComponent, KitchenComponent, LivingRoomComponent, BedroomComponent, BathroomComponent, TechsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTabsModule
  ]
})
export class ProductsModule { }
