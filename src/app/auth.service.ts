import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap((res: any) => {
        if (res.token) {
          this.token = res.token;
          localStorage.setItem('token', this.token);
        }
      })
    );
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((res: any) => {
        if (res.token) {
          this.token = res.token;
          localStorage.setItem('token', this.token);
        }
      })
    );
  }

  getToken() {
    return  localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
