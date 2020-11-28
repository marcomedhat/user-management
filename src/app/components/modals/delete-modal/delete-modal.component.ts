import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  user;
  name;
  id;

  constructor(public activeModal: NgbActiveModal, private usersService: UsersService) {
    this.usersService.userData.subscribe(user => {
      if (user) {
        this.user = user;
        this.name = user.data.first_name + ' ' + user.data.last_name;
        this.id = user.data.id;
      }
    });
  }

  ngOnInit(): void {
  }

  onDelete(id) {
    this.usersService.onDeleteUser(id);
    this.activeModal.dismiss('Cross click');
  }

}
