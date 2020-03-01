import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginBackgroundImagePath: string = 'assets/login.svg';

  public userName: string;
  public isLogout: boolean = false;

  constructor(private mainService: MainService,
              private loginService: LoginService,
              private router: Router) { }

  public ngOnInit(): void {
    this.loginService.userName.subscribe((value: string) => this.userName = value);
    this.loginService.isLogout.subscribe((value: boolean) => this.isLogout = value);
    if (this.loginService.checkUser()) {
      this.router.navigateByUrl('/main');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
    this.mainService.cardItemsArray = [];
  }

}
