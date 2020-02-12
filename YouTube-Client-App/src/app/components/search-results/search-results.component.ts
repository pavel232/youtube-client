import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';
import { ResultItem } from 'src/app/models/result-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResponse: SearchResponse;

  public resultItem: ResultItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
