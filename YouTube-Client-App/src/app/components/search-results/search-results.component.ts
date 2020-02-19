import { Component, OnInit, Injectable } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';
import { MainService }  from '../../services/main.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

@Injectable({providedIn: 'root'})

export class SearchResultsComponent implements OnInit {

  public resultItem: ResultItem[];

  constructor(public mainService: MainService) {  }

  public ngOnInit(): void {
    this.resultItem = this.mainService.getSearchItems();
  }

}
