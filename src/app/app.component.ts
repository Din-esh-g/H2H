import { Component, OnInit } from '@angular/core';
import{JwtHelperService} from '@auth0/angular-jwt';
import { AuthenticationService } from './_Services/authentication.service';

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
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
  }
    
 
 
  
  }
 
}

  

