import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/_Models/photo';
import { FileUploader } from 'ng2-file-upload';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/_Services/user.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';

@Component({
  selector: 'app-photoeditor',
  templateUrl: './photoeditor.component.html',
  styleUrls: ['./photoeditor.component.scss']
})
export class PhotoeditorComponent implements OnInit {
@Input() photos:Photo[];
@Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;  
  baseUrl = environment.apiUrl;
  currentMain: Photo;
 
  constructor(private authService: AuthenticationService,private alertyfy: AlertifyService
     ,private userService: UserService) { }

  ngOnInit() {
    this.initalizeUploader();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;

  }

  initalizeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onSuccessItem= (item, response, status, headers)=>{
      if(response){
        const res:Photo =JSON.parse(response);
        const photo={
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description:res.description,
          isMain:res.isMain
        };
        this.photos.push(photo);
        if(photo.isMain){
          this.authService.changeMemeberPhoto(photo.url);
          this.authService.currentUser.photoUrl = photo.url;
          localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        }
      }
    };
  }
setMainPhoto(photo:Photo){
  this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
    this.currentMain = this.photos.filter(p => p.isMain === true)[0];
    this.currentMain.isMain = false;
    photo.isMain = true;
    //this.getMemberPhotoChange.emit(photo.url);
    this.authService.changeMemeberPhoto(photo.url);
    this.authService.currentUser.photoUrl = photo.url;
    localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
    this.alertyfy.error('Sucessfully set to the main');
  },error =>{
    
      this.alertyfy.error('problem to make a main photo');
    
  });
}

deletePhoto(id: number){
  this.alertyfy.confirm('Are you sure you want to delete this photo ?',() =>{
    this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() =>{
      this.photos.splice(this.photos.findIndex(p => p.id ===id),1);
      this.alertyfy.sucess('Photo has been deleted');
    },
    error => {
      this.alertyfy.error('Failed to delete the Photo');
    
    });
  });

}

}
