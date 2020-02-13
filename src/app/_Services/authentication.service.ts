import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import {BehaviorSubject} from 'rxjs';
import { User } from '../_Models/user';
//import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.apiUrl+'auth/';
 jwtHelper = new JwtHelperService();
  decodedToken:any;
  currentUser:User;
  photoUrl = new BehaviorSubject<string>('../../assets/photo/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();
  constructor(private http: HttpClient,
    ) { }
    changeMemeberPhoto(photoUrl:string){
      this.photoUrl.next(photoUrl);
    }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            //This two line is extra for getting photo for nav bar
            localStorage.setItem('user', JSON.stringify(user.user));
            this.currentUser =user.user;
            this.decodedToken=this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
            this.changeMemeberPhoto(this.currentUser.photoUrl);
          }
        })
      );
  }
  loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
  //return !!token;
    
  }

  // register(model: any) {
  //   return this.http.post(this.baseUrl + 'register', model);
  // }
  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

}
