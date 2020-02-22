import { Component } from '@angular/core';
import { SortingComponent } from './components/sorting/sorting.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isShowSorting: boolean = false;

  public onToggle(): void {
    this.isShowSorting = !this.isShowSorting;
  }

}
