import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainService } from './services/main.service';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { Page404Component } from './components/page404/page404.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SearchBarComponent,
    SettingsComponent,
    Page404Component,
    SortingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MainService
  ],
  exports: [
    HeaderComponent,
    SortingComponent
  ]
})
export class CoreModule {}
