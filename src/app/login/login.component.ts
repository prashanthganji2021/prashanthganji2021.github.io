import { HttpService } from './../services/http.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string= '';

  constructor( private router: Router , private authsevice :AuthService, private htpservice: HttpService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authsevice.login(this.username, this.password).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', data[0].token);
        this.htpservice.setAuthToken(data[0].token);
        this.router.navigate(['/dashboard']);
      });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

}
