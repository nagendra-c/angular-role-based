import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { loginForm } from './login/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userApi:string = 'https://dummyjson.com/users/5/todos';
  Router: any;
  constructor(private http:HttpClient) { }
  getUserApi(){
    return this.http.get(this.userApi);
  }
  validateUser(_username: any,_password: any, _select: any){
      return true;
  }
  userDataPost(data:any){
      return this.http.post<any>('http://localhost:3000/posts',data).pipe(map( (res:any) => {
        return res;
      }));
  }


}
