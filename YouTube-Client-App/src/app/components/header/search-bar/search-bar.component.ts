import { Component, OnInit } from '@angular/core';
import { MainService} from '../../../services/main.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private mainService: MainService) { }

  public ngOnInit(): void {
  }

  public onSearch(): void {
    this.mainService.updateSearchItems();
  }

}
