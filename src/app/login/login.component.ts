import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private userService: UserService, private router:Router) {}
  
  userName:string='';


  login() {
  if(this.userService.isAuthenticatedUser(this.userName)){
    
    this.router.navigate(['/container']);
  }else{
    alert('geçersiz');
  }
  }
}
