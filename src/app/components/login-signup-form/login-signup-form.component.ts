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
  @Output() form_type = new EventEmitter<object>();

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  form!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    console.log('creating form')
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSave() {
    console.log('onSave', this.form.value)
    this.form_type.emit(this.form.value);
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



}