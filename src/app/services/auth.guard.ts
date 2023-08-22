import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersListService } from './user-list.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor( private isAuth: UsersListService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if(this.isAuth.isLoggedIn()){
      return true;
    }else{
      return this.router.parseUrl('/login');
    }
  }
  
  // canActivate(): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}
