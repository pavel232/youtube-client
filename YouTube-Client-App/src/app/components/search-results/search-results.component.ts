import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResponse: SearchResponse;

  constructor() { }

  public ngOnInit(): void {
  }

}
