import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { UserService } from 'src/app/_Services/user.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
users:User[];
  constructor(private userservice: UserService, private alertify:AlertifyService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
  this.loaduser();

  // this.route.data.subscribe(data => {
  //   this.users =data['users'];
  //})
  }

  loaduser(){
    this.userservice.getusers().subscribe((users:User[])=> {
      this.users=users;
    }, error => {
      //console.log(error);
    this.alertify.error(error);
    });
  }

}
