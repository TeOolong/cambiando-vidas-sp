import { Component, OnInit } from '@angular/core';
import { HealthProjectService } from '../home/services/health-project.service';

@Component({
  selector: 'app-health-project',
  templateUrl: './health-project.component.html',
  styleUrls: ['./health-project.component.scss'],
})
export class HealthProjectComponent implements OnInit {
  imagesTemplate: any = undefined;

  constructor(private healthProjectService: HealthProjectService) {}

  ngOnInit(): void {
    this.healthProjectService
      .getHealthProjectsImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
}
