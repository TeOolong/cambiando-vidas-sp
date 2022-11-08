import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutUsImagesService {
  constructor(private http: HttpClient) {}

  public getAboutUsImagesTemplate() {
    return this.http.get('/assets/data/about-us-images.json');
  }
}
