import { NgModule } from '@angular/core';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule {}
