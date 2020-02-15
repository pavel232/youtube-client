import { Component, OnInit } from '@angular/core';
import { SearchResultsComponent } from '../../search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private createCard: SearchResultsComponent) { }

  public ngOnInit(): void {
  }

  public onSearch(): void {
    this.createCard.createCard();
  }

}
