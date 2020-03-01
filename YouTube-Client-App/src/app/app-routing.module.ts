import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { Page404Component } from './core/components/page404/page404.component';
import { CardDetailComponent } from './youtube/components/card-detail/card-detail.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: 'App',
  //   component: AppComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       children: [
  //       ]
  //     }
  //   ]
  // },
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
