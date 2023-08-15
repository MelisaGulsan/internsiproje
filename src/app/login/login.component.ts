import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  
  constructor(private loginService: UserService, private router:Router) {}
  
  userName:string='';


  login() {
  if(this.loginService.checkUsername(this.userName)){
    this.router.navigate(['/container']);
  }else{
    alert('geçersiz');
  }
  }
}
