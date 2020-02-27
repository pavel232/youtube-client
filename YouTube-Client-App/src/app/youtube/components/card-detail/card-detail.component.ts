import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResultItem } from '../../models/result-item.model';

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

  public cardItem: any;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const tempCard: Object = this.routerParams.snapshot.queryParams;
    console.log(this.routerParams.snapshot);
    this.cardItem = tempCard;
  }

  public goBack(): void {
    this.router.navigateByUrl('/main');
  }

}
