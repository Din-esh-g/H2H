import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_Services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_Services/alertify.service';
import { Message } from '../_Models/Message';
import { AuthenticationService } from '../_Services/authentication.service';


@Injectable()
export class MessageResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer= 'Unread';
    constructor(private userService: UserService,
        private authService: AuthenticationService,
         private router: Router, private alertyfy: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages( this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}
