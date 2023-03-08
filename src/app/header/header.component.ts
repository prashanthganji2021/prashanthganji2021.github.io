import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  
  email = localStorage.getItem('email');
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  fullName = this.firstName + ' ' + this.lastName;
  profileImage = localStorage.getItem('profileImage');

  constructor(private router: Router) { }

  ngOnInit() {
    
  
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('profileImage');
    this.router.navigate(['/login']);
  }

}
