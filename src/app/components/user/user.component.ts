import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../modals/edit-modal/edit-modal.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;

  constructor(private usersService: UsersService, private modalService: NgbModal) {
    this.usersService.userData.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  closeDetails() {
    this.usersService.onCloseDetails();
  }

  openEditModal(id: number) {
    this.usersService.fetchSingleUser(id);
    this.modalService.open(EditModalComponent);
  }

}
