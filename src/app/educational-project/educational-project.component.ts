import { Component, OnInit } from '@angular/core';
import { EducationalProjectService } from '../home/services/educational-project.service';

@Component({
  selector: 'app-educational-project',
  templateUrl: './educational-project.component.html',
  styleUrls: ['./educational-project.component.scss'],
})
export class EducationalProjectComponent implements OnInit {
  imagesTemplate: any = undefined;

  constructor(private educationalProjectService: EducationalProjectService) {}

  ngOnInit(): void {
    this.educationalProjectService
      .getEducationalProjectsImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
}
