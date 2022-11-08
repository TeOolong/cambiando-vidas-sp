import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeImagesService {
  constructor(private http: HttpClient) {}

  public getHomeImagesTemplate() {
    return this.http.get('/assets/data/home-images.json');
  }
}
