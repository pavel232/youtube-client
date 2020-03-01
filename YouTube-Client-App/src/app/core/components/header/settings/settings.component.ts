import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settingsIcon: string = '/assets/settings.svg';

  constructor(private showSorting: HeaderComponent) { }

  public ngOnInit(): void {
  }

  public onClick(): void {
    this.showSorting.onToggle();
  }

}
