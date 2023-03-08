import { UserService } from './../user.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { User } from '../user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('dataTable', {static: false}) table: any;
@ViewChild('fileInput', {static: true}) fileInput: ElementRef;
  
  @ViewChild('add_user_list', {static: true})
  add_user_list: ModalDirective;
  registerForm: FormGroup;
  user: User = new User('', '', '', '', '', null);
  submitted = false;
  selectedImage: ''
  fileUpload: File
  filename: string;

  dataTable: any;
  response: any;
  userList: any;
  dtOptions: DataTables.Settings = {};
  router: any;
  update: boolean;
  editId: string;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  @ViewChild(DataTableDirective, {static: true})
  private datatableElement: DataTableDirective;
  ngOnInit() {
    this.getLetterList();
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

  getLetterList() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true,
      searching: false,
      lengthChange: true,
      serverSide: true,
      processing: true,
      order: [],
      dom: '<"top"f>rt<"bottom"ilp><"clear">',
      columnDefs: [
        {
          'targets': 'nosort'
        }
      ],
      language: {
        'info': `users`,
        'infoEmpty': `users`,
        'processing': 'Loading...',
        'paginate': {
          'first': '',
          'last': '',
          'next': 'next',
          'previous': 'previous  '
        },
        'lengthMenu': 'Show _MENU_ users',
      },
      ajax: (dataTablesParameters: any, callback) => {
        this.userService.getUsers().subscribe((response:any) => {
          if (response) {
            this.userList = response
            callback({ recordsTotal: response.length,
              recordsFiltered: response.length,
              data: []
            });
          }
        });
      }
    };
  }
  
  
  creatUserList(){
    this.registerForm.reset()
      this.add_user_list.show();
      this.update = false
  
  }
  
  onSubmit() {
  
      
    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.phoneNumber = this.registerForm.value.phoneNumber;
    
    this.add_user_list.hide()
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file', imageBlob, imageBlob.name);
    this.userService.uploadImage(file).subscribe((res) => {
    this.user.profileImage = res.filename
if(!this.update){
    this.userService.createUserList(this.user).subscribe(() => {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
    }, error => {
      console.error(error);
      alert('Error creating user');
    });
  } else {
  this.user.id = this.editId
    
    this.userService.updateUser(this.user).subscribe(()=>{
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
    })
  }
  
  });
  
 
  
  
  
}

  
onFileUpload() {
  const imageBlob = this.fileInput.nativeElement.files[0];
  const file = new FormData();
  file.set('file', imageBlob, imageBlob.name);
  this.userService.uploadImage(file).subscribe((res) => {
    this.filename = res.filename;
  });
}

deleteUser(userDetails){
  this.userService.deleteUser(userDetails._id).subscribe((res) => {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  })
}

updateUserList(userDetail){

  
  this.registerForm.get('email').setValue(userDetail.email);
    this.registerForm.get('firstName').setValue(userDetail.firstName);
this.registerForm.get('lastName').setValue(userDetail.lastName);
this.registerForm.get('phoneNumber').setValue(userDetail.phoneNumber);
this.update = true
this.editId = userDetail._id
this.add_user_list.show()
  
  
    
}

}


