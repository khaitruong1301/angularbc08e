import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/Pages/Users/Register.component';



// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class isRegisterGuard implements CanDeactivate<RegisterComponent> {
    canDeactivate(
        component: RegisterComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        if(component.isRegister) {
            return true;
        }

        if(confirm('Bạn chưa nhập dữ liệu hoàn tất ? Bạn vẫn tiếp tục rời khỏi trang ?')) {
            return true;
        }

        return false;
    }
}

