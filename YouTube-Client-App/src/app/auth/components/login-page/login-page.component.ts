import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public login: string = '';
  public password: string = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  public ngOnInit(): void {
  }

  public createUser(): void {
      if (this.loginService.createNewUser(this.login, this.password)) {
        this.router.navigateByUrl('/main');
      }
  }

}
