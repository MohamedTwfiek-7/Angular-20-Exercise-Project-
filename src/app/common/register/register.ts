import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { RegisterModel, Role, UserModel } from '../../models/login.model';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatRadioModule, MatSelectModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {
  roles: Role[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
    { value: 'guest', viewValue: 'Guest' }
  ];
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: Auth, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      name: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      role: this.fb.control('admin', Validators.required),
      gender: this.fb.control('male'),
      terms: this.fb.control(false, Validators.requiredTrue)
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as UserModel).subscribe(response => {
        alert('Registration successful!');
        this.router.navigateByUrl('/login');
      }, error => {
        alert('Registration failed. Please try again.');
      });
    } else if (this.registerForm.value.terms === false) {
      alert('Please accept the terms and conditions to proceed.');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

}
