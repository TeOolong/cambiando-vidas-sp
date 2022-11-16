import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EducationalProjectService {
  constructor(private http: HttpClient) {}

  public getEducationalProjectsImagesTemplate() {
    return this.http.get('/assets/data/educational-project-images.json');
  }
}
