import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactImagesService {
  constructor(private http: HttpClient) {}

  public getContactImagesTemplate() {
    return this.http.get('/assets/data/contact-images.json');
  }
}
