import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "./users.service";

@Injectable({providedIn:'root'})
export class AutGuard implements CanActivate{
    constructor(private userService: UserService, private router:Router){}

    canActivate():boolean{
        if(this.userService.isAuthenticatedUser()){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}