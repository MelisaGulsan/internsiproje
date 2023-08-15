import { Injectable } from '@angular/core';
import { Records } from '../_controller/records'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class UserService{

    private validUsername='MelisaGulsan';

    checkUsername(userName:string):boolean{
        return userName===this.validUsername;
    }
    constructor() { }

}