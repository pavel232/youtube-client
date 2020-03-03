import { Component, OnInit } from '@angular/core';
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

  constructor(public loginService: LoginService,
              private mainService: MainService,
              private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    const input: HTMLElement = document.getElementById('searchInput');

    fromEvent<any>(input, 'keyup').pipe(
      debounceTime(500),
      map(event => event.target.value),
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
