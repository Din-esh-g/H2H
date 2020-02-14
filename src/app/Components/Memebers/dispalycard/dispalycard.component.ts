import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { UserService } from 'src/app/_Services/user.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';

@Component({
  selector: 'app-dispalycard',
  templateUrl: './dispalycard.component.html',
  styleUrls: ['./dispalycard.component.scss']
})

export class DispalycardComponent implements OnInit {
@Input() user:User;
  constructor(private authService: AuthenticationService,
    private userService: UserService,
    private alertyfy: AlertifyService) { }

  ngOnInit() {
  }
sendLike(id: number){
this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
  this.alertyfy.error('You have liked: '+ this.user.knownAs);
}, error => {
  this.alertyfy.error('Problem to like' + this.user.knownAs);
});

}

}
