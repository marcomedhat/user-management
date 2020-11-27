import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  selectedUser = null;


  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.fetchUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  openUserDetails(id: number, user) {
    this.selectedUser = user;
    console.log(id);
  }

}
