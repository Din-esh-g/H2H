import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
users:User[];
  constructor(private userservice: UserService ) { }

  ngOnInit() {
  this.loaduser();
  }
  loaduser(){
    this.userservice.getusers().subscribe((users:User[])=> {
      this.users=users;
    }, error => {
      console.log(error);
    
    });
  }

}
