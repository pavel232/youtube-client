import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

class UserObj {
  constructor(public userName: string,
              public password: string = '') {}
}

export class LoginService {

  private user: User;
  @Output() public userName: EventEmitter<string> = new EventEmitter();
  @Output() public isLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public checkUser(): boolean {
    const user: User = JSON.parse(localStorage.getItem('User'));

    if (user) {
      this.userName.emit(user.userName);
      this.isLogout.emit(true);
      return true;
    }

    this.isLogout.emit(false);
    return false;
  }

  public createNewUser(name: string, password: string): boolean {
    this.user = new UserObj(name, password);
    localStorage.setItem('User', JSON.stringify(this.user));

    if (this.checkUser()) {
      return true;
    }
  }

  public logout(): void {
    localStorage.clear();
    this.userName.emit('');
    this.isLogout.emit(false);
  }
}
