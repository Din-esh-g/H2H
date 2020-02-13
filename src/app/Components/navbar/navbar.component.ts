import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_Models/user';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  users: User[];
  model: any = {};
  photoUrl:string;
  constructor(public authnticationService: AuthenticationService,
    private router: Router, private userservice: UserService, private alertify:AlertifyService) { }
  
  ngOnInit() {
    this.authnticationService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  login() {
    this.authnticationService.login(this.model).subscribe(next => {
     // console.log('Log in sucessful');
      this.alertify.message('Log in sucessful');
    }, error => {
      console.log('Login Failed.');
        this.alertify.error('Login Failed.');
    });

  }
  loggedIn() {
    //const token = localStorage.getItem('token');
    //return !!token;
    return this.authnticationService.loggedIn();
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authnticationService.decodedToken= null;
    this.authnticationService.currentUser=null;
    this.alertify.warning('logged out');
    this.router.navigate(['/home']);
  }

}
