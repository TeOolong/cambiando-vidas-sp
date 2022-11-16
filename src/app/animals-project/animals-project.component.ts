import { Component, OnInit } from '@angular/core';
import { AnimalsProjectService } from '../home/services/animals-project.service';

@Component({
  selector: 'app-animals-project',
  templateUrl: './animals-project.component.html',
  styleUrls: ['./animals-project.component.scss'],
})
export class AnimalsProjectComponent implements OnInit {
  imagesTemplate: any = undefined;

  constructor(private animalsProjectService: AnimalsProjectService) {}

  ngOnInit(): void {
    this.animalsProjectService
      .getAnimalsImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
}
