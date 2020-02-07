import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../_Services/authentication.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(
    private authService:AuthenticationService,
    private router: Router,
    //private alertify: AlertifyService
  ){}

  canActivate(): boolean  {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
