import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private userService: UserService, private router:Router) {}
  
  userName:string='';
  error:string="";
  

  login() {
  
    if(this.userService.isAuthenticatedUser(this.userName)){
    
      this.router.navigate(['/container']);
    }else{
      this.error="Incorrect username or missing information"
    }

 
  }
}
