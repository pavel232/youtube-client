import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { MainService } from '../../services/main.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

@Injectable({providedIn: 'root'})

export class SortingComponent implements OnInit {

  public searchString: string = '';

  constructor(
    private mainService: MainService,
    private filterService: FilterService
    ) { }

  public ngOnInit(): void {
  }

  public sortingByDate(): void {
    this.mainService.sortByDate();
  }

  public sortingByViews(): void {
    this.mainService.sortByViews();
  }

  public onInput(value: string): void {
    this.filterService.setFilterWord(value);
  }

}
