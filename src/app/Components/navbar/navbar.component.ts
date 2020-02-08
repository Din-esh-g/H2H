import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { UserService } from 'src/app/_Services/user.service';
import { User } from 'src/app/_Models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  users: User[];
  model: any = {};
  constructor(private authnticationService: AuthenticationService, private userservice: UserService) { }

  ngOnInit() {
  }
  login() {
    this.authnticationService.login(this.model).subscribe(next => {
      console.log('Log in sucessful');
    }, error => {
      console.log('Login Failed.');

    });

  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
