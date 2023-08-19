import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserService {
  private readonly validUsername = 'MelisaGulsan';
  public errorMessage:string="";
  
  isAuthenticatedUser(userName: string): boolean {
    return userName===this.validUsername;
  }
  constructor() {}
}
