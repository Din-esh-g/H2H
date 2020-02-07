import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
//import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.apiUrl+'auth/';
 // jwtHelper = new JwtHelperService();
  decodedToken:any;
  constructor(private http: HttpClient,
    ) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }
  loggedIn() {
  const token = localStorage.getItem('token');
   return true;
    console.log()
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

}
