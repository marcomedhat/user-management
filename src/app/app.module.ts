import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CreateModalComponent } from './components/modals/create-modal/create-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './components/modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    CreateModalComponent,
    EditModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
