import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate ,CanActivateChild  {
  constructor(private service:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const url: string = state.url;
      return this.checkLogin(url);
  
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  checkLogin(url: string) {
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.service.redirectUrl = url;
    this.router.navigate(['/login'], {queryParams: { returnUrl: url }} );
  }
}
