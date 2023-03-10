import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService) { }

  login(username: string, password: string): Observable<any> {
    return this.commonService.login({ username, password });
  }

  logout(): Observable<any> {
    return this.commonService.logout();
  }

  updateProfile(profile: any): Observable<any> {
    return this.commonService.updateProfile(profile);
  }
}
