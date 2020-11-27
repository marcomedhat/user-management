import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = {
  };

  public usersData = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  fetchUsers(page = 1) {
    return this.http
      .get(
        `https://reqres.in/api/users?page=${page}`
      );
  }


  // onDeleteMessage(id: number) {
  //   const idx = this.messages.findIndex(x => x.messageId == id);
  //   this.messages.splice(idx, 1);
  //   this.myMessages.next(this.messages);
  // }

  // getSingleMessage(id) {
  //   // const idx = this.messages.findIndex(x => x.messageId == id);
  //   // this.message = this.messages[idx];
  //   return this.message;
  // }

  // onAddMessage(data) {
  //   this.messages.unshift(data);
  //   this.myMessages.next(this.messages);
  // }

}
