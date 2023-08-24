import { Component, Input, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/user-list.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.scss'],
})
export class ContainerLeftComponent implements OnInit {
  @Input()
  childPosition!: string;
  users!: User[];
  userName: string = '';
  name: string = '';

  ngOnInit(): void {
    this.getGithubDetails();
  }

  constructor(private userList: UsersListService) {}

  getGithubDetails() {
    this.userName = this.userList.getUserName();
    let list: User[] = [];
    this.userList.getUser(this.userName).subscribe((data) => {
      list.push(data);
      this.name = data.name;
    });
    this.users = list;
  }
}
