import { Component, OnInit } from '@angular/core';
import { Pagination, PaginationResult } from 'src/app/_Models/pagination';
import { User } from 'src/app/_Models/user';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { UserService } from 'src/app/_Services/user.service';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-makeafriend',
  templateUrl: './makeafriend.component.html',
  styleUrls: ['./makeafriend.component.scss']
})
export class MakeafriendComponent implements OnInit {
users: User[];
pagination: Pagination;
likesParam: string
  constructor(private authService: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private alertyfy: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users=data['users'].result;
      this.pagination =data['users'].pagination;
    });
    this.likesParam='Likers';
    
  }
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    console.log(this.pagination);
    this.loaduser();
  }
  loaduser() {
    this.userService.getusers(this.pagination.currentPage, this.pagination.itemsPerPage,null, this.likesParam)
      .subscribe((res: PaginationResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      }, error => {
        //console.log(error);
        this.alertyfy.error(error);
      });
  }

}
