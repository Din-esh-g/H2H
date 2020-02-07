import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_Models/user';
const httpOptions ={
  headers:new HttpHeaders({
  'Authorization':'Bearer '+localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
getusers():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl+'users',httpOptions);
}

getuser(id):Observable<User>{
  return this.http.get<User>(this.baseUrl+'users/'+id,httpOptions);
}


}
