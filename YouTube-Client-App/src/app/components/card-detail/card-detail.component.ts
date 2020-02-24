import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.cardItem = this.routerParams.snapshot.queryParams;
  }

  public goBack(): void {
    this.router.navigateByUrl('/main');
  }

}
