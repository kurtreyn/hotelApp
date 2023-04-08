import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { USERS } from '../../usersInterface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  log!: any;
  public error: any = [];
  public success = null;

  constructor(private service: ApiService, private router: Router) { }


  onSubmit(user: USERS) {
    console.log('user: ', user)
    this.service.signUp(user).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    )
  }
  handleResponse(data: any) {
    this.success = data.message;
    alert('Signup successful');
    // this.form.reset();
    this.router.navigate(['login']);
  }
  handleError(error: any) {
    this.error = error.error.errors;
    alert('Signup failed');
  }


}
