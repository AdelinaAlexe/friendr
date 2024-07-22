import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUserByCredentials(username: string, password: string): Observable<any> {
    //console.log('ok');
    return this.http.get(`http://localhost:3008/users/${username}`);
  }

  getPosts(): Observable<any> {
    //console.log('ok');
    return this.http.get(`http://localhost:3008/posts/`);
  }

  registerUser(username: string, password: string, firstName: string, lastName: string, birthYear: number): Observable<any> {
    return this.http.post(`http://localhost:3008/users/`, {username, password, firstName, lastName, birthYear});
  }
}
