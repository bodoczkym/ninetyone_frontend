import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
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
                    if (next.url.join('').includes('profile')) {
                        console.log('"Van joga megnezni."');
                    }
                    return true;
                } else {
                    if (next.url.join('').includes('profile')) {
                        console.log('"Nincs joga megnezni."');
                    }
                    return false;
                }
            } else {
                if (next.url.join('').includes('profile')) {
                    console.log('"Nincs benne a next.data && next.data.roles-ban."');
                }
                return true;
            }
        } else {
            if (next.data && next.data.roles) {
                if (next.data.roles.includes('ROLE_USER')) {
                    return true;
                }
            }
        }
        console.log(state.url);
        this.authService.redirectUrl = '/profile';
        this.router.navigate(['/profile']);
        return false;
    }

}
