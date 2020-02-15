import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settingsBackgroundPath: string = '/assets/settings.svg';

  constructor(private showSorting: AppComponent) { }

  public ngOnInit(): void {
  }

  public onClick(): void {
    this.showSorting.onToggle();
  }

}
