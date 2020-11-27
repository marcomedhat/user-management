import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users;

  public usersData = new BehaviorSubject(null);
  public userData = new BehaviorSubject(null);
  public detailsOpen = new BehaviorSubject(false);
  public selectedUser = new BehaviorSubject(null);
  public deletedUser = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  fetchUsers(page = 1) {
    return this.http
      .get(
        `https://reqres.in/api/users?page=${page}`
      ).subscribe(users => {
        this.users = users;
        this.usersData.next(this.users);
      });
  }

  fetchSingleUser(id: number) {
    return this.http
      .get(
        `https://reqres.in/api/users/${id}`
      )
      .subscribe(user => {
        this.userData.next(user);
      });
  }

  onCloseDetails() {
    this.detailsOpen.next(false);
    this.selectedUser.next(null);
  }

  onAddNewUser(name, job) {
    this.http
      .post('https://reqres.in/api/users/', {name, job})
      .subscribe(user => console.log('new-user', user));
  }

  onEditUser(id, name, job) {
    this.http
      .put(`https://reqres.in/api/users/${id}`, {name, job})
      .subscribe(user => console.log('updated-user', user));
  }

  onDeleteUser(id) {
    this.http
      .delete(`https://reqres.in/api/users/${id}`);
    this.users.data = this.users.data.filter(user => user.id !== id);
    this.usersData.next(this.users);
    this.selectedUser.next(null);
    this.userData.next(null);
    this.detailsOpen.next(false);
  }

}
