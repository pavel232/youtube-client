import { Injectable } from '@angular/core';
import { YouTubeResponse } from '../response';
import { SearchResponse } from 'src/app/models/search-response.model';
import { ResultItem } from '../models/result-item.model';

@Injectable({providedIn: 'root'})

export class MainService {

  public mockData: SearchResponse = YouTubeResponse;
  public cardItemsArray: ResultItem[] = [];

  constructor() {  }

  private calculateDate (date: string): number {
    const a: Date = new Date();
    const b: Date = new Date(date);
    return +a - +b;
  }

  public getSearchItems(): ResultItem[] {
    return this.cardItemsArray;
  }

  public updateSearchItems(): void {
    // this.cardItemsArray = [];
    this.mockData.items.map((element) => {
      const item: ResultItem = {
        title: element.snippet.title,
        preview: element.snippet.thumbnails.medium.url,
        previewLarge: element.snippet.thumbnails.standard.url,
        views: element.statistics.viewCount,
        likes: element.statistics.likeCount,
        dislikes: element.statistics.dislikeCount,
        comments: element.statistics.commentCount,
        description: element.snippet.description,
        uploadDate: element.snippet.publishedAt,
        uploadedAgo: this.calculateDate(element.snippet.publishedAt)
      };
      this.cardItemsArray.push(item);
    });
  }

  public sortByDate(): void {
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => a.uploadedAgo - b.uploadedAgo);
  }

  public sortByViews(): void {
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => +a.views - +b.views);
  }

}
