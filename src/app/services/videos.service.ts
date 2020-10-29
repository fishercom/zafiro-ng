import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  api_url = environment.api_url + 'article/find_list';
  options = {
    headers: new Headers({
      'content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
    


  }
}
