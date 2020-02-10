import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_Models/user';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
  styleUrls: ['./membersdetails.component.scss']
})
export class MembersdetailsComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService:UserService, private route: ActivatedRoute) { }

  ngOnInit() {
   //this.loadUser();
this.route.data.subscribe(data => {
  this.user =data['user'];
});
  this.galleryOptions=[{
    width:'500px',
    height:'500px',
imagePercent:100,
thumbnailsColumns:4,
imageAnimation:NgxGalleryAnimation.Slide,

  }
];
this.galleryImages =this.getImage();

}

getImage( ){
  const imageUrl =[];
  for(const photo of this.user.photos){
    imageUrl.push({
      small:photo.url,
      medium:photo.url,
      big:photo.url,
      description:photo.description
    });
  }
  return imageUrl;
}



  // loadUser(){
  //   this.userService.getuser(+this.route.snapshot.params['id']).subscribe((user:User) => {
  //     this.user =user;
  //   },error => {

  //   console.log(error);
  //   });

   
  

}
