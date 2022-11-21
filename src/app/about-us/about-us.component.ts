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
      document.location.href = 'https://storage.googleapis.com/documentos-cambiando-vidas/RESOLUCION-000040-2020_IN_DGIN_DAEG-01Nov2020-1.pdf'
    } else if (doc === 'b') {
      document.location.href = 'https://storage.googleapis.com/documentos-cambiando-vidas/Poli%CC%81tica-de-Seguridad-y-Salud-en-el-Trabajo-CAMBIANDO-VIDAS.pdf'
    }
  }
}
