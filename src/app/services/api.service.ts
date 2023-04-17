import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { USERS } from '../usersInterface';
import { ROOMS } from '../roomsInterface';

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
  rooms_url: string = 'http://localhost:3000/rooms';
  form!: FormGroup;

  constructor(private http: HttpClient) { }

  signUp(user: USERS): Observable<USERS> {
    return this.http.post<USERS>(this.users_url, user, httpOptions)
  }

  getRooms(): Observable<ROOMS[]> {
    return this.http.get<ROOMS[]>(this.rooms_url)
      .pipe(
        tap(room => console.log('fetched room', room))
      )
  }

}
