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
        views: element.statistics.viewCount,
        likes: element.statistics.likeCount,
        dislikes: element.statistics.dislikeCount,
        comments: element.statistics.commentCount,
        uploadDate: this.calculateDate(element.snippet.publishedAt)
      };
      this.cardItemsArray.push(item);
    });
  }

  public sortByDate(): void {
    console.log(this.cardItemsArray);
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => a.uploadDate - b.uploadDate);
  }

  public sortByViews(): void {
    console.log(this.cardItemsArray);
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => +a.views - +b.views);
  }

  public sortByKeyword(word: string): void {
    this.cardItemsArray.filter((w: any) => w === word);
  }

}
