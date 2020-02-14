import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_Models/user';
import { PaginationResult } from '../_Models/pagination';
import { map } from 'rxjs/operators';
//This line is commented because we used new method to sent token
// const httpOptions ={
//   headers:new HttpHeaders({
//   'Authorization':'Bearer '+localStorage.getItem('token')
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  // getusers():Observable<User[]>{
  //   return this.http.get<User[]>(this.baseUrl+'users',httpOptions);
  // }

  // getuser(id):Observable<User>{
  //   return this.http.get<User>(this.baseUrl+'users/'+id,httpOptions);
  // }
  //This is the getusers() method with out pagination
  //getusers(): Observable<User[]> {
  // return this.http.get<User[]>(this.baseUrl + 'users');
  // }
  getusers(page?, itemsPerPage?, userParams?, likeParams?): Observable<PaginationResult<User[]>> {
    const paginatedResult: PaginationResult<User[]> = new PaginationResult<User[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    //filter
    if(userParams !=null){
      params=params.append('minAge',userParams.minAge);
      params = params.append('maxAge', userParams.maxAge);
      params = params.append('gender', userParams.gender);
      params = params.append('orderBy', userParams.orderBy);
    }
if(likeParams==='Likers')
{
  params= params.append('likers', 'true');
}

  if (likeParams === 'Likees') 
  {
      params = params.append('Likees', 'true');
    }
    
    return this.http.get<User[]>(this.baseUrl + 'users', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
          }
          return paginatedResult;
        })
      );

  }

  //   return this.http.get<User[]>(this.baseUrl+'users', { observe: 'response', parms})
  //     .pipe(
  //       map(response =>{
  //     paginatedResult.result = response.body;

  // if(response.headers.get('Pagination') != null)
  // {
  //   paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
  // }
  // return paginatedResult;
  //       })
  //     );
  // }

  getuser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
  }
  deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }

  sendLike(id:number, recipientId: number){
    return this.http.post(this.baseUrl+'users/'+ id + '/like/' + recipientId, {});
  }

}
