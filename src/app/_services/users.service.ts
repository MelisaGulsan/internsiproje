import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserService {
  private readonly validUsername = 'MelisaGulsan';

  isAuthenticatedUser(userName: string): boolean {
    return userName===this.validUsername;
  }
  constructor() {}
}
