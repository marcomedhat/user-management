import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;

  constructor(private usersService: UsersService) {
    this.usersService.userData.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  closeDetails() {
    this.usersService.onCloseDetails();
  }

}
