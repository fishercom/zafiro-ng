import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  api_url = environment.api_url + 'article/find_list';
  httpOptions = {
    headers: new Headers({
      'content-type': 'application/json'
    })
  }

  front_view ='video';
  site_id ='video';
  lang_id ='video';
  rows=null;

  constructor(private http: HttpClient) {
  }

  get_list(): Observable<article[]>{
    return this.http.get<article[]>(this.api_url+'?front_view='+this.front_view+'&site_id='+this.site_id+'&lang_id='+this.lang_id+'&rows='+this.rows);
  }

  
}
