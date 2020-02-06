import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(private authnticationService: AuthenticationService) { }

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
