import { Injectable } from '@angular/core';
import { ResultItem } from '../models/result-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Item } from 'src/app/core/models/search-response.model';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient,
              private apiKey: AppComponent
  ) { }

  public createItem(data: SearchResponse): ResultItem {
    const item: Item = data.items[0];

    return {
      title: item.snippet.title,
      preview: item.snippet.thumbnails.medium.url,
      videoLink: `https://www.youtube.com/embed/${item.id}`,
      views: item.statistics.viewCount,
      likes: item.statistics.likeCount,
      dislikes: item.statistics.dislikeCount,
      comments: item.statistics.commentCount,
      description: item.snippet.description,
      uploadDate: item.snippet.publishedAt,
    };
  }

  public getItem(id: string): Observable<SearchResponse> {

    return this.http.get<SearchResponse>('https://www.googleapis.com/youtube/v3/videos', {
      params: new HttpParams()
        .set('key', this.apiKey.apiKey)
        .set('id', id)
        .set('part', 'snippet,statistics')
    });
  }

}
