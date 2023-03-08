import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.authenticateUser(this.username, this.password).subscribe(user => {
      // Authentication successful - navigate to user profile page
      localStorage.setItem('token', user.token);
      // res.json({ token , id: loginUser.id , email:loginUser.email, firstName: loginUser.firstName, lastName: loginUser.lastName });
      localStorage.setItem('id', user.id);
      localStorage.setItem('email', user.email);
      localStorage.setItem('firstName', user.firstName);
      localStorage.setItem('lastName', user.lastName);
      localStorage.setItem('profileImage', user.profileImage);
   
      this.router.navigate(['/dashboard']);
      
      
    }, error => {
      console.error(error);
      alert('Invalid email or password');
      // 
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

}
