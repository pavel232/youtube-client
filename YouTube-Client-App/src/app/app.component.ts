import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable({providedIn: 'root'})

export class AppComponent {

  public apiKey: string = 'AIzaSyDwC6SUom3ylede5xMa_i428yopceJP1NA';

}
