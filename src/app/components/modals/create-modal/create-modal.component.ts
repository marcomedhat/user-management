import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) { return; }
    this.usersService.onAddNewUser(form.value.username, form.value.jobtitle);
    this.activeModal.dismiss('Cross click');
  }

}
