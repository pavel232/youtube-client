import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from 'src/app/models/result-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public cardItem: ResultItem;

  public iconViewed: string = 'assets/viewed.svg';
  public iconLiked: string = 'assets/liked.svg';
  public iconDislike: string = 'assets/dislike.svg';
  public iconComments: string = 'assets/comments.svg';

  constructor() { }

  public ngOnInit(): void {
  }

}
