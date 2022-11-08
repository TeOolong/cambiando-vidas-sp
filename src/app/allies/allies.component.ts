import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlliesImagesService } from '../home/services/allies-images.service';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.scss'],
})
export class AlliesComponent implements OnInit {
  imagesTemplate: any = undefined;
  contactForm: FormGroup;
  responsiveOptions;
  constructor(private alliesImagesService: AlliesImagesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 9,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 6,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.alliesImagesService
      .getAlliesImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }
  onSubmit() {}
}
