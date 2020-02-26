import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginBackgroundImagePath: string = 'assets/login.svg';

  public userName: string = 'Your name';

  public isLogout: boolean = false;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.goToLogin();
  }

  public goToLogin(): void {
    if (!localStorage.getItem('User')) {
      this.router.navigate(['/login']);
    } else {
      const name: User = JSON.parse(localStorage.getItem('User'));
      this.userName = name.userName;
      console.log(this.userName);
      this.isLogout = true;
    }
  }

  public logout(): void {
    localStorage.clear();
    this.isLogout = false;
    this.router.navigate(['/login']);
    this.userName = 'Your name';
  }

}
