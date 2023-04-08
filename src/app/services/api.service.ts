import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url)
  }
}
