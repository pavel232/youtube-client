import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from '../../services/detail.service';
import { ResultItem } from '../../models/result-item.model';
import { SearchResponse } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  public iconViewed: string = 'assets/viewed.svg';
  public iconLiked: string = 'assets/liked.svg';
  public iconDislike: string = 'assets/dislike.svg';
  public iconComments: string = 'assets/comments.svg';

  public cardItem: ResultItem;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private detailService: DetailService
  ) { }

  public ngOnInit(): void {
    const videoId: string = this.routerParams.snapshot.queryParams.id;
    this.detailService.getItem(videoId).subscribe((data: SearchResponse) => {
      this.cardItem = this.detailService.createItem(data);
    });
  }

  public goBack(): void {
    this.router.navigateByUrl('/main');
  }

}
