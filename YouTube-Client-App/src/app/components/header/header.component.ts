import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoPath: string = '/assets/logo.svg';

  constructor() { }

  public ngOnInit(): void {
  }

}
