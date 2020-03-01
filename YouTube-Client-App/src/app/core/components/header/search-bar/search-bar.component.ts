import { Component, OnInit } from '@angular/core';
import { MainService} from '../../../services/main.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { observable, fromEvent, Observable } from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchString: string;

  constructor(public loginService: LoginService,
              private mainService: MainService,
              private router: Router
    ) { }

  public ngOnInit(): void {
  }

  public onSearch(): void {

    // const input: EventTarget = document.querySelector('input');

    // fromEvent(input, 'keyup').pipe(
    //   debounceTime(700),
    //   map(event => event.target.value),
    //   filter(value => value.length > 3),
    //   distinctUntilChanged(),
    //   map(value => value)
    // )
    // .subscribe({
    //   next: console.log
    // });

    this.mainService.onSearch(this.searchString);

    this.router.navigate(['/main'], {
      queryParams: {
        search: this.searchString
      }
    });
  }

}
