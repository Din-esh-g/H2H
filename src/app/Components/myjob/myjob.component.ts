import { Component, OnInit, ViewChild } from '@angular/core';
import { MyjobsService } from 'src/app/_Services/myjobs.service';
import { error } from 'util';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.component.html',
  styleUrls: ['./myjob.component.scss']
})
export class MyjobComponent implements OnInit {
  @ViewChild('postmyjobForm',{static:true}) postmyjobForm:NgForm;
  values: any;
  model: any = {};
  constructor(private myjobservice: MyjobsService, private alertyfyService:AlertifyService) { }
  //constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getmyjob();
  }

  postmyjob() {
    this.myjobservice.postmyjob(this.model).subscribe(() => {
      this.alertyfyService.error('Job Post Sucessfully');
      this.postmyjobForm.reset();
      //console.log('Job Post Sucessfully');
    }, error => {
      //console.log(error);
        this.alertyfyService.error('Error to Post the job');
    });

  }
  getmyjob() {
    this.myjobservice.getMyjob().subscribe(response => {
      this.values = response
    },
      error => {
        console.log(error)
      });
  }


}
