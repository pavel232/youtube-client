import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showSorting: boolean = false;

  public onToggle(): void {
    this.showSorting = !this.showSorting;
  }

}
