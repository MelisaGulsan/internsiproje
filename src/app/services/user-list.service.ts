import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private httpClient:HttpClient) { }
  private isAuthenticated: boolean=false;
  private userName:string=''

  getUser(value:string):Observable<User>{
    this.isAuthenticated=true;
    this.userName=value;
    return this.httpClient.get<User>("https://api.github.com/users/"+ value);

  }
   isLoggedIn():boolean{
    return this.isAuthenticated;
  }

  getUserName():string{
    return this.userName ;
  }
  // logout():void{
  //   this.isAuthenticated=false;
  //   this.userName='';
  // }
}