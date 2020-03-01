import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoPath: string = '/assets/logo.svg';

  public isShowSorting: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public onToggle(): void {
    this.isShowSorting = !this.isShowSorting;
  }

}
