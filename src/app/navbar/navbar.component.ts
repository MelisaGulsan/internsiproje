import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName:string='MelisaGulsan';
  name:string='';
  photo:string='';
  hata:string|null=null;

  constructor(private http:HttpClient) { }

  ngOnInit(): void { this.getGithubUser();}

  getGithubUser(){
    const url = `https://api.github.com/users/${this.userName}`;
    this.http.get<any>(url)
      .subscribe(
        (response) => {
          this.name = response.name;
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
