import { Component, OnInit } from '@angular/core';
import { MyjobsService } from 'src/app/_Services/myjobs.service';
import { error } from 'util';

@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.component.html',
  styleUrls: ['./myjob.component.scss']
})
export class MyjobComponent implements OnInit {
  jobs: any;

  constructor(private myjobservice: MyjobsService) { }

  ngOnInit() {
    this.getmyjob();
  }

getmyjob(){
  return this.myjobservice.getmyjob().subscribe( response => {
  this.jobs = response},
  error=>{
    console.log(error);
  });
}


}
