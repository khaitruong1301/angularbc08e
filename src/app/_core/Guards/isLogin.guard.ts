import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { USER_LOGIN } from '../Util/setting';

@Injectable({providedIn: 'root'})
export class isLoginGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(localStorage.getItem(USER_LOGIN)) {
            return true;
        }
        alert('Bạn cần đang nhập để vào được trang này !');

        this.router.navigate(['/users/login']);

        return false;
    }
}