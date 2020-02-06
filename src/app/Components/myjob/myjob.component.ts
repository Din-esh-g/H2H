import { Component, OnInit } from '@angular/core';
import { MyjobsService } from 'src/app/_Services/myjobs.service';
import { error } from 'util';

@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.component.html',
  styleUrls: ['./myjob.component.scss']
})
export class MyjobComponent implements OnInit {
  values: any;
  model: any = {};
  constructor(private myjobservice: MyjobsService) { }
  //constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getmyjob();
  }

  postmyjob() {
    this.myjobservice.postmyjob(this.model).subscribe(() => {
      console.log('Job Post Sucessfully');
    }, error => {
      console.log(error);

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
