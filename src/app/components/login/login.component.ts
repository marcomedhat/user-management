import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInvalid = false;
  token;
  error;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.formInvalid = true;
      return;
    }
    this.authService.onLogin(form.value.username, form.value.password)
      .subscribe(
        res => {
          this.token = res;
          localStorage.setItem('token', this.token);
          this.router.navigate(['/users']);
        },
        error => {
          this.error = error.error.error;
        }
      );
    form.reset();
  }
}
