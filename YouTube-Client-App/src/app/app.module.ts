import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SortingComponent } from './core/components/sorting/sorting.component';
import { SearchBarComponent } from './core/components/header/search-bar/search-bar.component';
import { LoginComponent } from './core/components/header/login/login.component';
import { SettingsComponent } from './core/components/header/settings/settings.component';
import { MainService } from './core/services/main.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './core/pipes/filter.pipe';
import { Page404Component } from './core/components/page404/page404.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { CardDetailComponent } from './youtube/components/card-detail/card-detail.component';
import { AuthComponent } from './auth/auth.component';

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
    FilterPipe,
    Page404Component,
    LoginPageComponent,
    CardDetailComponent,
    AuthComponent,
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
