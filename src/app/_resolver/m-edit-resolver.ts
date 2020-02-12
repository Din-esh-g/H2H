import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../_Services/authentication.service';
import { AlertifyService } from '../_Services/alertify.service';


@Injectable()
export class MEditResolver implements Resolve<User> {

    constructor(private userService: UserService,
         private router: Router, 
         private authService: AuthenticationService,
         private alertity: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getuser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertity.error('Problem to retriving your data for users.');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}
