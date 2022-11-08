import { Component, OnInit } from '@angular/core';
import { AboutUsImagesService } from '../home/services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  imagesTemplate: any = undefined;
  constructor(private aboutUsImagesService: AboutUsImagesService) {}

  ngOnInit(): void {
    this.aboutUsImagesService
      .getAboutUsImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }

  redirectDocument(doc: string) {
    if (doc === 'a') {
    } else if (doc === 'b') {
    }
  }
}
