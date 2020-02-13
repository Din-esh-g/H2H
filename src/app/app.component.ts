import { Component, OnInit } from '@angular/core';
import{JwtHelperService} from '@auth0/angular-jwt';
import { AuthenticationService } from './_Services/authentication.service';
import { User } from './_Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jwtHelper= new JwtHelperService();
  
  constructor(private authService: AuthenticationService) {}
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    //This for nav photo user
    const user:User = JSON.parse(localStorage.getItem('user'));
    
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
  }
  if(user){
    this.authService.currentUser=user;
    this.authService.changeMemeberPhoto(user.photoUrl);
  }

    
 
 
  
  }
 
}

  

