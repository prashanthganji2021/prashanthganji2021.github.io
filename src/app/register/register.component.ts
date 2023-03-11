import { CommonService } from './../services/common.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private router: Router) { }
  

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required,] ],
      lastName: ['',[Validators.required,] ],
      email: ['',[ Validators.required,Validators.email]],
      phoneNumber: ['',[Validators.required, Validators.pattern('^\\d{10}$')]],
      password: ['', [Validators.required, Validators.minLength(12)]],
    });
  }
 

  get formControls() {
    return this.registerForm.controls;
  }
  

  onSubmit() {
      let data = this.registerForm.value;
      this.commonService.createUser(data).subscribe(() => {
        alert('User created successfully!');
        this.router.navigate(['/login']);
      }, (error: any) => {
        console.error(error);
        alert('Error creating user');
      });
    
    
  }
  
  
  onLogin() {
    this.router.navigate(['/login']);
  }
  
  
  
 
  
  
    
    

}
