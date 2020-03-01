import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailService } from './services/detail.service';
import { FilterService } from './services/filter.service';
import { FilterPipe } from '../core/pipes/filter.pipe';

@NgModule({
  declarations: [
    CardDetailComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DetailService,
    FilterService
  ]
})
export class YouTubeModule {}
