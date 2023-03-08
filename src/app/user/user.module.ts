import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';



@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserCreateComponent, UserUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
