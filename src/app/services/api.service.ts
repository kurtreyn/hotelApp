import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { USERS } from '../usersInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users_url: string = 'http://localhost:3000/users';
  form!: FormGroup;

  constructor(private http: HttpClient) { }

  signUp(user: USERS): Observable<USERS> {
    return this.http.post<USERS>(this.users_url, user, httpOptions)
  }

}
