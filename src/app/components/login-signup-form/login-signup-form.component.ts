import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import { USERS } from '../../usersInterface';

@Component({
  selector: 'app-login-signup-form',
  templateUrl: './login-signup-form.component.html',
  styleUrls: ['./login-signup-form.component.scss']
})
export class LoginSignupFormComponent implements OnInit {
  @Input() formType: string = '';
  @Input() formTitle?: string;
  @Output() form_type = new EventEmitter<any>()

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }



  onSave() {
    this.form_type.emit(this.form.value);
  }
}