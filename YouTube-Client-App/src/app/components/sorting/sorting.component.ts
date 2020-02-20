import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { MainService } from '../../services/main.service';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

@Injectable({providedIn: 'root'})

export class SortingComponent implements OnInit {

  public searchString: string = '';

  constructor(private mainService: MainService) { }

  public ngOnInit(): void {
  }

  public sortingByDate(): void {
    this.mainService.sortByDate();
  }

  public sortingByViews(): void {
    this.mainService.sortByViews();
  }

}
