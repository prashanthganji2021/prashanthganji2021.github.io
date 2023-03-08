import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FileUploadModule} from "ng2-file-upload";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';  
import {MatCardModule} from '@angular/material/card';
import { DataTablesModule } from 'angular-datatables';
import { MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    MatCardModule,
    DataTablesModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),

  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
