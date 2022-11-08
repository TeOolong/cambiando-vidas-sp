import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlliesImagesService {
  constructor(private http: HttpClient) {}

  public getAlliesImagesTemplate() {
    return this.http.get('/assets/data/allies-images.json');
  }
}
