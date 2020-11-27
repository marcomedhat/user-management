import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateModalComponent } from '../modals/create-modal/create-modal.component';
import { EditModalComponent } from '../modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  selectedUser = null;
  detailsOpen = false;

  constructor(private usersService: UsersService, private modalService: NgbModal) {
    this.usersService.usersData.subscribe(users => this.users = users);
    this.usersService.detailsOpen.subscribe(val => {
      this.detailsOpen = val;
    });
    this.usersService.selectedUser.subscribe(val => {
      this.selectedUser = val;
    });
  }

  ngOnInit(): void {
    this.usersService.fetchUsers();
  }

  openUserDetails(id: number, user) {
    this.selectedUser = user;
    this.detailsOpen = true;
    this.usersService.fetchSingleUser(id);
  }

  openCreateModal() {
    this.modalService.open(CreateModalComponent);
  }

  openEditModal(id: number) {
    this.usersService.fetchSingleUser(id);
    this.modalService.open(EditModalComponent);
  }

  openDeleteModal(id: number) {
    this.usersService.fetchSingleUser(id);
    this.modalService.open(DeleteModalComponent);
  }

}
