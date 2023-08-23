import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersListService } from '../services/user-list.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private usersListService: UsersListService
  ) {}
  users!: User[];

  userName: string = '';
  error: string = '';

  ngOnInit(): void {}
  login() {
    let list: User[] = [];
    this.usersListService.getUser(this.userName).subscribe(
      (data) => {
        list.push(data);
        this.router.navigate(['/home']);
      },
      (error) => {
        if (error.status === 404) {
          this.error = 'Kullanıcı bulunamadı.'; // 404 hatası durumunda hata mesajı atama
        } else {
          this.error = 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        }
      }
    );
    this.users = list;
    
  }
  
}
