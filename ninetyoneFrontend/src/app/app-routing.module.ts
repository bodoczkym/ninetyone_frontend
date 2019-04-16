import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_USER']
        }
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
        }
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
        }
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER']
        }
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER']
        }
    },
    {
        path: 'riports',
        loadChildren: './riports/riports.module#RiportsModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'GUEST']
        }
    },
    {
        path: 'forum',
        loadChildren: './forum/forum.module#ForumModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
        }
    },
    {
        path: 'connect',
        loadChildren: './contact/contact.module#ContactModule',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
        }
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_OWNER', 'ROLE_USER', 'GUEST']
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
