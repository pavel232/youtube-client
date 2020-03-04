import { Injectable } from '@angular/core';
import { SearchResponse } from 'src/app/core/models/search-response.model';
import { VideoIdList } from 'src/app/core/models/video-id-list.model';
import { ResultItem } from '../../youtube/models/result-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Injectable({providedIn: 'root'})

export class MainService {

  public cardItemsArray: ResultItem[] = [];

  private forwardDate: boolean = true;
  private forwardView: boolean = true;

  constructor(private http: HttpClient,
              private apiKey: AppComponent
  ) { }

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
        videoId: element.id,
        title: element.snippet.title,
        preview: element.snippet.thumbnails.medium.url,
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

  public onSearch(searchString: string): void {

    this.http.get('https://www.googleapis.com/youtube/v3/search', {
      params: new HttpParams()
        .set('key', this.apiKey.apiKey)
        .set('type', 'video')
        .set('part', 'snippet')
        .set('maxResults', '25')
        .set('q', searchString)
    }).subscribe((data: VideoIdList) => {
      const arrayIds: string[] = [];
      data.items.forEach(item => {
        arrayIds.push(item.id.videoId);
      });

      const ids: string = arrayIds.join();
      this.http.get('https://www.googleapis.com/youtube/v3/videos', {
        params: new HttpParams()
          .set('key', this.apiKey.apiKey)
          .set('id', ids)
          .set('part', 'snippet,statistics')
      }).subscribe((item: SearchResponse) => {
        this.updateSearchItems(item);
      });
    });
  }

  public sortByDate(): void {
    if(this.forwardDate) {
      this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => a.uploadedAgo - b.uploadedAgo);
      this.forwardDate = !this.forwardDate;
    } else {
      this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => b.uploadedAgo - a.uploadedAgo);
      this.forwardDate = !this.forwardDate;
    }
  }

  public sortByViews(): void {
    if(this.forwardView) {
      this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => +a.views - +b.views);
      this.forwardView = !this.forwardView;
    } else {
      this.cardItemsArray.sort((a: ResultItem, b: ResultItem) => +b.views - +a.views);
      this.forwardView = !this.forwardView;
    }
  }

}
