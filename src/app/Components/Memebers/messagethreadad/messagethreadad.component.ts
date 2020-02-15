import { Component, OnInit, Input } from '@angular/core';

import { UserService } from 'src/app/_Services/user.service';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/_Models/Message';

@Component({
  selector: 'app-messagethreadad',
  templateUrl: './messagethreadad.component.html',
  styleUrls: ['./messagethreadad.component.scss']
})
export class MessagethreadadComponent implements OnInit {
@Input() recipientId:number;
messages: Message[];
newMessage : any ={};
  constructor(private authService: AuthenticationService, 
    private userService: UserService, 
    private alertyfy: AlertifyService
    ) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages(){
    this.userService.getMesssageThread(this.authService.decodedToken.nameid, this.recipientId)
    .subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertyfy.error(error);
    });
  }

sendMessage(){
  this.newMessage.recipientId = this.recipientId;
  this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe((message:Message) =>{
    this.messages.unshift(message);
    this.newMessage.content ='';
  }, error => {
    this.alertyfy.error(error);
  });
}


}
