import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Page404Component } from './components/page404/page404.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'page-404', component: Page404Component},
  {path: 'main', component: SearchResultsComponent},
  {path: 'detail/:id', component: CardDetailComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
