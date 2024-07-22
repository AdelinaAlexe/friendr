import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { leadingComment } from '@angular/compiler';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string='';
  password: string='';
  loading = false;

  constructor(private router: Router, private appService: AppService) { 
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username) {
      this.username = username;
    }

    if (password) {
      this.password = password;
    }
  } 

  signIn() {
    this.loading = true;
    this.appService
    .getUserByCredentials(this.username, this.password)
    .pipe(first())
    .subscribe({
      next: (response) => {
        this.loading = false;
        localStorage.setItem('firstName' , response?.firstName);
        localStorage.setItem('lastName' , response?.lastName);

         localStorage.setItem('username', this.username);
         localStorage.setItem('password', this.password);
        
        if (response.password === this.password) {
        this.router.navigate(['/homepage']);
        }
        else {
          alert('Invalid username or password');
        }
      }, 
      
      error: (error) => {
        this.loading = false;
        console.error(error);
        alert('Invalid username or password');
      }
    });
    
  }

  signUp() {
    this.router.navigate(['/register']);
  }
}
