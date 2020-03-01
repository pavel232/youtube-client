import { Injectable } from '@angular/core';
import { SearchResponse } from 'src/app/core/models/search-response.model';
import { VideoIdList } from 'src/app/core/models/video-id-list.model';
import { ResultItem } from '../../youtube/models/result-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class MainService {

  public cardItemsArray: ResultItem[] = [];

  public apiKey: string = 'AIzaSyDwC6SUom3ylede5xMa_i428yopceJP1NA';

  constructor(private http: HttpClient) { }

  private calculateDate (date: string): number {
    const a: Date = new Date();
    const b: Date = new Date(date);
    return +a - +b;
  }

  public getSearchItems(): ResultItem[] {
    return this.cardItemsArray;
  }

  public updateSearchItems(mockData: SearchResponse): void {
    this.cardItemsArray.length = 0;

    mockData.items.forEach((element) => {
      const item: ResultItem = {
        title: element.snippet.title,
        preview: element.snippet.thumbnails.medium.url,
        previewLarge: element.snippet.thumbnails.high.url,
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

  public onSearch(searchString: string): string {
    // tslint:disable-next-line: typedef
    const request = 'https://www.googleapis.com/youtube/v3/';
    // tslint:disable-next-line: typedef
    let url = `${request}search?key=${this.apiKey}&type=video&part=snippet&maxResults=25&q=${searchString}`;

    this.http.get(url).subscribe((data: VideoIdList) => {
      const arrayIds: string[] = [];
      data.items.forEach(item => {
        arrayIds.push(item.id.videoId);
      });

      const ids: string = arrayIds.join();
      url = `${request}videos?key=${this.apiKey}&id=${ids}&part=snippet,statistics`;

      this.http.get(url).subscribe((item: SearchResponse) => {
        this.updateSearchItems(item);
      });
    });
    return url;
  }

  public sortByDate(): void {
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => a.uploadedAgo - b.uploadedAgo);
  }

  public sortByViews(): void {
    this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => +a.views - +b.views);
  }

}
