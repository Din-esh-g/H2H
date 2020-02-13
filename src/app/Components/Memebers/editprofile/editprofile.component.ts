import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/_Services/authentication.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
@ViewChild('editForm', {static:true}) editForm: NgForm; 
user: User;
photoUrl:string;
@HostListener('window:beforeunload',['$event'])
unloadNotification($event:any){
  if(this.editForm.dirty){
    $event.returnValue=true;
  }
}
  constructor(private authService:AuthenticationService, 
    private route:ActivatedRoute, 
    private userService:UserService, 
    private alertify:AlertifyService) { }

  ngOnInit() {
   this.route.data.subscribe(data => {
      this.user=data['user'];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
   // this.loadUser();
  }

  //  loadUser(){
  //  this.userservice.getuser(+this.route.snapshot.params['id']).subscribe((user:User) => {
  //     this.user =user;
  //   },error => {

  //   this.alertify.error('Problem to load the details of the users');
  //    });

//}


updateUser(){
this.userService.updateUser(this.authService.decodedToken.nameid,this.user).subscribe(next => {
  this.alertify.error('Profile update Sucessful');
  this.editForm.reset(this.user);
},
error => {
  this.alertify.error('Problem to update information.');
});

}
updateMainPhoto(photoUrl){
  this.user.photoUrl =photoUrl;
}


}
