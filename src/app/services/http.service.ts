import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = environment.apiUrl;
  private authToken: string | null = null;

  constructor(private http: HttpClient) { }

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  clearAuthToken(): void {
    this.authToken = null;
  }

  get(url: string): Observable<any> {
    const options = this.getRequestOptions();
    return this.http.get(`${this.apiUrl}/${url}`, options).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, body: object): Observable<any> {
    const options = this.getRequestOptions();
    return this.http.post(`${this.apiUrl}/${url}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, body: object): Observable<any> {
    const options = this.getRequestOptions();
    return this.http.put(`${this.apiUrl}/${url}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  patch(url: string, body: object): Observable<any> {
    const options = this.getRequestOptions();
    return this.http.patch(`${this.apiUrl}/${url}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string): Observable<any> {
    const options = this.getRequestOptions();
    return this.http.delete(`${this.apiUrl}/${url}`, options).pipe(
      catchError(this.handleError)
    );
  }

  private getRequestOptions(): any {
    let headers = new HttpHeaders();
    if (this.authToken) {
      headers = headers.set('Authorization', `Bearer ${this.authToken}`);
    }
    return { headers };
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
