import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router:Router) {}
  
  userName:string='';
  error:string="";
  

  login() {
    if(this.authService.login(this.userName)){
    
      this.router.navigate(['/home']);
    }else{
      this.error="Incorrect username or missing information"
    }

 
  }
}
