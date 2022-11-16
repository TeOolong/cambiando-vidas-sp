import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodProjectService {
  constructor(private http: HttpClient) {}

  public getFoodProjectsImagesTemplate() {
    return this.http.get('/assets/data/food-project-images.json');
  }
}
