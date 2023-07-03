
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/themes';
import { Post } from './types/posts';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}


  getThemes () {
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }

  getPosts(limit?: number) {
    const {appUrl} = environment;
    return this.http.get<Post[]>(`${appUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }



}
