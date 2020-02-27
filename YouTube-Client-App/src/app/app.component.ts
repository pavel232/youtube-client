import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isShowSorting: boolean = false;
  public isShow404: boolean = false;

  public onToggle(): void {
    this.isShowSorting = !this.isShowSorting;
  }

}
