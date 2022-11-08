import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HealthProjectService {
  constructor(private http: HttpClient) {}

  public getHealthProjectsImagesTemplate() {
    return this.http.get('/assets/data/health-project-images.json');
  }
}
