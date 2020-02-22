import { Component, OnInit, Injectable } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';
import { MainService }  from '../../services/main.service';
import { FilterService } from 'src/app/services/filter.service';

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
    private mainService: MainService,
    private filerService: FilterService
    ) {  }

  public ngOnInit(): void {
    this.resultItem = this.mainService.getSearchItems();
    this.filerService.filterWord.subscribe((value: string) => this.keyWord = value);
  }

}
