import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService2 } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService2,
        private router: Router
    ) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            if (next.url.join('').includes('profile')) {
                console.log('Logged in');
            }
            if (next.data && next.data.roles) {
                if (next.data.roles.includes(this.authService.user.role)) {
                   /* if (next.url.join('').includes('living')) {
                        console.log('"Van joga megnezni."');
                    }*/
                    console.log('Van joga megnézni.1');
                    return true;
                } else {
                    /*if (next.url.join('').includes('profile')) {
                        console.log('"Nincs joga megnezni."');
                    }*/
                    console.log('Nincs joga megnézni.2');
                    return false;
                }
            } else {
                /*if (next.url.join('').includes('profile')) {
                    console.log('"Nincs benne a next.data && next.data.roles-ban."');
                }*/
                console.log('Nincs benne a rolesokban.3');
                return true;
            }
        } else {
            if (next.data && next.data.roles) {
                if (next.data.roles.includes('GUEST')) {
                    console.log('He is a guest.4');
                    return true;
                }
                console.log('Nincs joga megnézni.5');
            }
            console.log('Nincs benne a rolesokban.6');
        }
        console.log(state.url);
        this.authService.redirectUrl = '/products';
        this.router.navigate(['/products']);
        return false;
    }

}
