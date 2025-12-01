import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel, UserModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private http: HttpClient) { }

  login(data: LoginModel) {
    return this.http.get(`http://localhost:3000/users?username=${data.username}&&password=${data.password}`);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  register(data: UserModel) {
    return this.http.post('http://localhost:3000/users', data);
  }
}
