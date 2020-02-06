import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyjobsService {
  baseUrl = 'https://localhost:44346/api/myjobs/';

  //myjobs:any;
  // httpCleint: any;
  constructor(private http: HttpClient) { }

  postmyjob(model: any) {
    return this.http.post(this.baseUrl + 'postmyjob', model);

  }
  getMyjob() {
    return this.http.get(this.baseUrl);
  }
  getmyjobbyid(id: number) {
    return this.http.get(this.baseUrl + id);
  }


}
