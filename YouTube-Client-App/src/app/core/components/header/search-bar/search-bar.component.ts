import { Component, OnInit, EventEmitter } from '@angular/core';
import { MainService} from '../../../services/main.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { fromEvent } from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  public isLogout: boolean = false;

  constructor(public loginService: LoginService,
              private mainService: MainService,
              private router: Router
  ) { }

  public ngOnInit(): void {
    this.loginService.isLogout.subscribe((value: boolean) => this.isLogout = value);

    const input: HTMLElement = document.getElementById('searchInput');

    fromEvent(input, 'keyup').pipe(
      debounceTime(500),
      map(event => (event.target as HTMLInputElement).value),
      filter(value => value.length > 2),
      distinctUntilChanged(),
      map(value => value)
    ).subscribe(
      str => this.onSearch(str)
    );
  }

  public onSearch(str: string): void {

    this.mainService.onSearch(str);

    this.router.navigate(['/main'], {
      queryParams: {
        search: str
      }
    });
  }

}
