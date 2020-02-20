import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { LoginComponent } from './components/header/login/login.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { MainService } from './services/main.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SortingComponent,
    SearchBarComponent,
    LoginComponent,
    SettingsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
