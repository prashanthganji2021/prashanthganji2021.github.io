import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    const url = `${this.apiUrl}/countries`;
    return this.http.get<any>(url);
  }

  login(data: any): Observable<any> {
    const url = `${this.apiUrl}/users/login`;
  
    return this.http.post<any>(url, data);
  
  
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}/logout`;
    return this.http.post<any>(url, {});
  }

  updateProfile(profile: any): Observable<any> {
    const url = `${this.apiUrl}/users/profile`;
    return this.http.put<any>(url, profile);
  }
  
  createUser(data: any): Observable<any> {
    const url = `${this.apiUrl}/users/register`;
    return this.http.post<any>(url, data);
  }
}
