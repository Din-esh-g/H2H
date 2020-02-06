import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyjobsService {
baseurl : 'http://localhost:44346/api/myjobs/';
  constructor(private http: HttpClient) { }

postjob(jobs:any){
  return this.http.post(this.baseurl+'postmyjob',jobs);
}

getmyjob(){
  return this.http.get(this.baseurl);
}

getmyjobbyid(id){
  return this.http.get(this.baseurl +id);
}


}
