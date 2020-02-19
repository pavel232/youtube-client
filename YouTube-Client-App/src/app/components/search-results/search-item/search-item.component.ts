import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public cardItem: ResultItem;

  public color: string;

  public iconViewed: string = 'assets/viewed.svg';
  public iconLiked: string = 'assets/liked.svg';
  public iconDislike: string = 'assets/dislike.svg';
  public iconComments: string = 'assets/comments.svg';

  constructor() { }

  public ngOnInit(): void {
    const sevenDays = 604800000;
    const oneMonth = 2592000000;
    const sixMonth = 15552000000;

    if (this.cardItem.uploadDate < sevenDays) {
      this.color = 'blue';
    } else if (this.cardItem.uploadDate > sevenDays && this.cardItem.uploadDate < oneMonth) {
      this.color = 'green';
    } else if (this.cardItem.uploadDate > oneMonth && this.cardItem.uploadDate < sixMonth) {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }
  }
}
