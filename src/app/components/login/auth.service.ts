import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  onLogin(email, password) {
    return this.http.post('https://reqres.in/api/login/', {email, password});
  }

  getToken() {
    return !!localStorage.getItem('token');
  }
}
