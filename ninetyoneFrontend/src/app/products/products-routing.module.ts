import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { KitchenComponent } from './product-list/kitchen/kitchen.component';
import { BathroomComponent } from './product-list/bathroom/bathroom.component';
import { LivingRoomComponent } from './product-list/living-room/living-room.component';
import { TechsComponent } from './product-list/techs/techs.component';
import { BedroomComponent } from './product-list/bedroom/bedroom.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { AuthGuard } from './../auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'kitchen',
    component: KitchenComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'bathroom',
    component: BathroomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'livingroom',
    component: LivingRoomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'techs',
    component: TechsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'bedroom',
    component: BedroomComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'bedroom/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'livingroom/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'kitchen/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'bathroom/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'techs/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
    }
  },
  {
    path: 'modify',
    component: EditProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER']
    }
  },
  {
    path: 'add',
    component: NewProductComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_OWNER']
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
