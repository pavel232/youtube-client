import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class User {
  constructor(public userName: string,
              public password: string = '') {}
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public login: string = '';
  public password: string = '';

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public createUser(): void {
      const user: User = new User(this.login, this.password);

      localStorage.setItem('User', JSON.stringify(user));
      this.router.navigate(['/main']);
  }

}
