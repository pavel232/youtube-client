import { Component, OnInit, Injectable } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';
import { YouTubeResponse } from '../../response';
import { ResultItem } from 'src/app/models/result-item.model';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  public resultItem: ResultItem[] = [];

  public response: SearchResponse = YouTubeResponse;

  constructor() { }

  public ngOnInit(): void {
    this.createCard();
  }

  public createCard(): void {
    this.resultItem = [];

    this.response.items.map((element) => {
      const item: ResultItem = {
        title: element.snippet.title,
        preview: element.snippet.thumbnails.medium.url,
        views: element.statistics.viewCount,
        likes: element.statistics.likeCount,
        dislikes: element.statistics.dislikeCount,
        comments: element.statistics.commentCount,
        uploadDate: element.snippet.publishedAt
      };
      this.resultItem.push(item);
    });
    console.log(this.resultItem);
  }

}
