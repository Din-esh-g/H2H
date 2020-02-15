import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_Models/Message';
import { Pagination, PaginationResult } from 'src/app/_Models/pagination';
import { UserService } from 'src/app/_Services/user.service';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_Services/alertify.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
messages: Message[];
pagination: Pagination;
messageContainer = 'Unread';
  constructor(private userService:UserService,
    private authService: AuthenticationService ,
    private route: ActivatedRoute,
    private alertyfy: AlertifyService ) { }

  ngOnInit() {
this.route.data.subscribe(data => {
  this.messages= data['messages'].result;
  this.pagination = data['messages'].pagination;
});

  }
loadMessages(){
  this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
.subscribe((res: PaginationResult<Message[]>) => {
  this.messages =res.result;
  this.pagination = res.pagination;
}, error => {
  this.alertyfy.error('Problem to send message. ');
}
);
}
pageChanged(event:any):void{
  this.pagination.currentPage = event.page;
  this.loadMessages();
}

  deleteMessage(id: number){
this.alertyfy.confirm('Are you sure you want to delete this messages. ', () => {
  this.userService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
    this.messages.splice(this.messages.findIndex(m => m.id ===id), 1);
    this.alertyfy.error('Message has been deleted. ');
  }, error  => {
    this.alertyfy.error('Failed to delete the message.');
  });
});
  }
}
