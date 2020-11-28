import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

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

  onSubmit(form: NgForm) {
    if (!form.valid) { return; }
    this.usersService.onEditUser(this.id, form.value.username, form.value.jobtitle);
    this.activeModal.dismiss('Cross click');
  }

}
