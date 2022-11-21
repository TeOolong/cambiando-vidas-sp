import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalsProjectService {
  constructor(private http: HttpClient) {}

  public getAnimalsImagesTemplate() {
    return this.http.get('/assets/data/animals-project-images.json');
  }
}
