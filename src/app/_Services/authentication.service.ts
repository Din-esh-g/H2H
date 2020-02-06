import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'https://localhost:44346/api/auth/';
  constructor(private http: HttpClient) { }

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
    console.log()
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

}
