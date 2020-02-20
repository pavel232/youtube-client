import { Component, OnInit, Injectable } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';
import { MainService }  from '../../services/main.service';
import { SortingComponent } from '../sorting/sorting.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

@Injectable({providedIn: 'root'})

export class SearchResultsComponent implements OnInit {

  public resultItem: ResultItem[];

  public keyWord: string = '';

  constructor(
    public mainService: MainService,
    public sorting: SortingComponent
    ) {  }

  public ngOnInit(): void {
    this.resultItem = this.mainService.getSearchItems();
    this.keyWord = this.mainService.filterWord;
  }

}
