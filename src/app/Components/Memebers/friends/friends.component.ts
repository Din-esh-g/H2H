import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { UserService } from 'src/app/_Services/user.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginationResult } from 'src/app/_Models/pagination';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  users: User[];
  //This is for filter
  user: User =JSON.parse(localStorage.getItem('user'));
  genderList:[{value:'male', display:'Males'}, {value:'female', display:'Female'}];
  userParams:any ={};
  //

  pagination: Pagination;

  constructor(private userservice: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.loaduser();

    this.route.data.subscribe(data => {
      
      this.users =data['users'].result;
       this.pagination= data['users'].pagination;
    });

    this.userParams.gender = this.user.gender ==='female' ? 'male':'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge =99; 
    this.userParams.orderBy ='lastActive';
  }

  resetFilter(){
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99; 
    this.loaduser();
  }


  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    console.log(this.pagination);
    this.loaduser();
  }

  loaduser() {
    this.userservice.getusers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
      .subscribe((res: PaginationResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      }, error => {
        //console.log(error);
        this.alertify.error(error);
      });
  }

}


