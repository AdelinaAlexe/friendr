import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs';
import { leadingComment } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string='';
  password: string='';
  confirmPassword: string='';
  firstName: string='';
  lastName: string='';
  birthYear: number = 0;
  successMessage: string='';
  loading = false;

  constructor(private router: Router, private appService: AppService) { }

  signUp() {
    this.loading = true;
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.appService.registerUser(this.username, this.password, this.firstName, this.lastName, this.birthYear)
    .pipe(first())
    .subscribe({
      next: (response) => {
        this.loading = false;
        if (response) {
          this.router.navigate(['/']);
        }
        else {
          alert('Username already exists');
        }
      },

      error: (error) => {
        this.loading = false;
        console.error(error);
        alert('Error registering user');
      }

    });

    this.successMessage = 'User created successfully';

  }

}
