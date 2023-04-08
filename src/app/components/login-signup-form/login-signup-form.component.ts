import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-form',
  templateUrl: './login-signup-form.component.html',
  styleUrls: ['./login-signup-form.component.scss']
})
export class LoginSignupFormComponent implements OnInit {
  @Input() formType: string = '';
  @Input() formTitle?: string;
  @Output() form_type = new EventEmitter<string>();

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  form!: FormGroup;

  // ngOnInit() {
  //   this.form = new FormGroup({
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  //   });
  // }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/signupUsers', this.form.value).subscribe(res => {
      console.log('res: ', res)
      alert('Signup successful');
      this.form.reset()
      this.router.navigate(['login']);
    }, err => {
      alert('Signup failed');
      this.form.reset()
    })
  }

  onSubmit() {
    console.log('formType: ', this.formType);
    if (this.formType === 'login') {
      this.signUp()
    } else if (this.formType === 'signup') {
      console.log('signup');
    }
    console.log(this.form)
  }

}