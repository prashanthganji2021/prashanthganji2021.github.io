import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users';
  private backendApi = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: any): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  
  createUserList(client:any): Observable<User> {
    return this.http.post<User>(this.apiUrl, client)
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }
  
  uploadImage(user: any): Observable<any> {
    const url = `${this.apiUrl}/upload`;
    return this.http.post<User>(url, user);
  }

  deleteUser(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url);
  }
  
  authenticateUser(email: string, password: string): Observable<User> {
    const url = `${this.apiUrl}/authenticate`;
    return this.http.post<User>(url, {email, password});
  }

}
