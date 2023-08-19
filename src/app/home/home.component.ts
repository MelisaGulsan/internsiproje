import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string='';

  constructor(private authService: AuthService, private router: Router) {}

  login(){
    if(this.authService.login(this.username)){
      this.router.navigate(['/home']);
    }else{
      alert('Hatalı kullanıcı adı');
    }
  }
}
