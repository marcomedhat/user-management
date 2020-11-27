import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userData = new BehaviorSubject(null);
  public detailsOpen = new BehaviorSubject(false);
  public selectedUser = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  fetchUsers(page = 1) {
    return this.http
      .get(
        `https://reqres.in/api/users?page=${page}`
      );
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

}
