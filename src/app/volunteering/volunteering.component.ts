import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VolunteeringImagesService } from '../home/services/volunteering-images.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss'],
})
export class VolunteeringComponent implements OnInit {
  imagesTemplate: any = undefined;
  contactForm: FormGroup;

  constructor(private volunteeringImagesService: VolunteeringImagesService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.volunteeringImagesService
      .getVolunteeringImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
  onSubmit() {}
}
