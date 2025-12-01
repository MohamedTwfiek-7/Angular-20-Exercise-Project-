import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginModel } from '../../models/login.model';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  constructor(private auth: Auth, private router: Router) { }
  ngOnInit(): void {
    localStorage.clear();
  }
  _loginData: LoginModel = {
    username: '',
    password: ''
  }

  login(form: any) {
    if (form.valid) {
      this.auth.login(this._loginData).subscribe({
        next: (res: any) => {
          if (res.length > 0) {
            localStorage.setItem('username', this._loginData.username);
            this.router.navigate(['']);
          } else {
            alert('Invalid username or password.');
          }
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }
}
