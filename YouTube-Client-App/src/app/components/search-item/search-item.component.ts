import { Component, OnInit } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  public resultItem: ResultItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
