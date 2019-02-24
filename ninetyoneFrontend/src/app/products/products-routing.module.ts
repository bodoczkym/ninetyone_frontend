import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { KitchenComponent } from './product-list/kitchen/kitchen.component';
import { BathroomComponent } from './product-list/bathroom/bathroom.component';
import { LivingRoomComponent } from './product-list/living-room/living-room.component';
import { TechsComponent } from './product-list/techs/techs.component';
import { BedroomComponent } from './product-list/bedroom/bedroom.component';

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
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
