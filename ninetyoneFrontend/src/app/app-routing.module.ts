import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'forum',
        loadChildren: './forum/forum.module#ForumModule'
    },
    {
        path: 'connect',
        loadChildren: './contact/contact.module#ContactModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
