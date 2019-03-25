import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { KitchenComponent } from './product-list/kitchen/kitchen.component';
import { BathroomComponent } from './product-list/bathroom/bathroom.component';
import { LivingRoomComponent } from './product-list/living-room/living-room.component';
import { TechsComponent } from './product-list/techs/techs.component';
import { BedroomComponent } from './product-list/bedroom/bedroom.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'bathroom',
    component: BathroomComponent
  },
  {
    path: 'livingroom',
    component: LivingRoomComponent
  },
  {
    path: 'techs',
    component: TechsComponent
  },
  {
    path: 'bedroom',
    component: BedroomComponent
  },
  {
    path: 'bedroom/:id',
    component: SingleProductComponent
  },
  {
    path: 'livingroom/:id',
    component: SingleProductComponent
  },
  {
    path: 'kitchen/:id',
    component: SingleProductComponent
  },
  {
    path: 'bathroom/:id',
    component: SingleProductComponent
  },
  {
    path: 'techs/:id',
    component: SingleProductComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
