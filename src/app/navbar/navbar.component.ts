import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/user';
import { UsersListService } from '../services/user-list.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name:string='';
  photo:string='';
  hata:string|null=null;

  constructor(private http:HttpClient, private userList: UsersListService) { }

  ngOnInit(): void { this.getGithubUser();}

  getGithubUser(){
    this.name=this.userList.getUserName();

    const url = `https://api.github.com/users/${this.name}`;
    this.http.get<User>(url)
      .subscribe(
        (response) => {
          this.photo = response.avatar_url;
          this.hata = null;
        },
        (_error) => {
          this.name = '';
          this.photo = '';
          this.hata = 'Kullanıcı bulunamadı.';
        }
    );

  }
}
