import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

@Injectable({providedIn: 'root'})

export class SortingComponent implements OnInit {

  // public isShow: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  // public toggleShow(): void {
  //   this.isShow = !this.isShow;
  //   console.log(this.isShow);
  // }

}
