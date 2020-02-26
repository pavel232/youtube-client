import { Component, OnInit } from '@angular/core';
import { MainService} from '../../../services/main.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchString: string;

  constructor(private mainService: MainService,
              private router: Router
    ) { }

  public ngOnInit(): void {
  }

  public onSearch(): void {
    const user: User = JSON.parse(localStorage.getItem('User'));
    if (this.searchString && user) {
      this.router.navigate(['/main'], {
        queryParams: {
          search: this.searchString
        }
      });
      this.mainService.updateSearchItems();
    }
  }

}
