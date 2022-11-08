import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VolunteeringImagesService {
  constructor(private http: HttpClient) {}

  public getVolunteeringImagesTemplate() {
    return this.http.get('/assets/data/volunteering-images.json');
  }
}
