import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from 'src/app/youtube/models/result-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public cardItem: ResultItem;
  @Input() public cardId: number;

  public color: string;

  public iconViewed: string = 'assets/viewed.svg';
  public iconLiked: string = 'assets/liked.svg';
  public iconDislike: string = 'assets/dislike.svg';
  public iconComments: string = 'assets/comments.svg';

  constructor(private router: Router) { }

  public ngOnInit(): void {
    // tslint:disable-next-line: typedef
    const sevenDays = 604800000;
    // tslint:disable-next-line: typedef
    const oneMonth = 2592000000;
    // tslint:disable-next-line: typedef
    const sixMonth = 15552000000;

    if (this.cardItem.uploadedAgo < sevenDays) {
      this.color = 'blue';
    } else if (this.cardItem.uploadedAgo > sevenDays && this.cardItem.uploadedAgo < oneMonth) {
      this.color = 'green';
    } else if (this.cardItem.uploadedAgo > oneMonth && this.cardItem.uploadedAgo < sixMonth) {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }
  }

  public showMoreInfo(): void {
    this.router.navigate([`./detail`, this.cardId], {
      queryParams: {
        id: this.cardItem.videoId
      }
    });
  }
}
