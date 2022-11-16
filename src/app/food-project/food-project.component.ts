import { Component, OnInit } from '@angular/core';
import { FoodProjectService } from '../home/services/food-project.service';

@Component({
  selector: 'app-food-project',
  templateUrl: './food-project.component.html',
  styleUrls: ['./food-project.component.scss'],
})
export class FoodProjectComponent implements OnInit {
  imagesTemplate: any = undefined;

  constructor(private foodProjectService: FoodProjectService) {}

  ngOnInit(): void {
    this.foodProjectService
      .getFoodProjectsImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
}
