import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticated: boolean=false;
  private userName:string ='';

  login(userName:string):boolean{
    if (userName==='MelisaGulsan') {
      this.isAuthenticated=true;
      this.userName=userName;
      return true;
    }
    return false;
  }

  isLoggedIn():boolean{
    return this.isAuthenticated;
  }
  getuserName():string{
    return this.userName;
  }
  logout():void{
    this.isAuthenticated=false;
    this.userName='';
  }
}
