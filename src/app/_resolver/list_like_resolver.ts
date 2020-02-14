import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_Services/alertify.service';


@Injectable()
export class LikeListResolver implements Resolve<User[]> {
    pageNumber = 1;
    pageSize = 5;
    likesParams = 'Likers';
    constructor(private userService: UserService, private router: Router, private alertyfy: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getusers(this.pageNumber, this.pageSize, null, this.likesParams).pipe(
            catchError(error => {
                console.log('Problem to retriving data.9');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}
