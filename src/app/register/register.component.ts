import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User = new User('', '', '', '', '', null);
  submitted = false;
  selectedImage: string;
  fileUpload: File
  filename: string;
  
@ViewChild('fileInput', {static: true}) fileInput: ElementRef;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
         
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
         
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\d{10}$')
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(12)]],
    });
  
   
  }
 

  get formControls() {
    return this.registerForm.controls;
  }
  
    // Check password while typing
   
  
  
  
  
  
  
 


  onSubmit() {
  
      
      this.user.firstName = this.registerForm.value.firstName;
      this.user.lastName = this.registerForm.value.lastName;
      this.user.email = this.registerForm.value.email;
      this.user.password = this.registerForm.value.password;
      this.user.phoneNumber = this.registerForm.value.phoneNumber;
      
      const imageBlob = this.fileInput.nativeElement.files[0];
      const file = new FormData();
      file.set('file', imageBlob, imageBlob.name);
      this.userService.uploadImage(file).subscribe((res) => {
      this.user.profileImage = res.filename

      this.userService.createUser(this.user).subscribe(() => {
        alert('User created successfully!');
        this.router.navigate(['/login']);
      }, error => {
        console.error(error);
        alert('Error creating user');
      });
    });
    
    
  }
  
  
  onLogin() {
    this.router.navigate(['/login']);
  }
  
  onFileSelected($event) {
    const file = $event.target.files[0];
    this.registerForm.get('profileImage').setValue(file);
  }
  
  onImageSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      
      this.fileUpload = event.target.files[0]

      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      
    }
  }
  
  onFileUpload() {
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file', imageBlob, imageBlob.name);
    this.userService.uploadImage(file).subscribe((res) => {
      this.filename = res.filename;
    });
  }
    
    
    

}
