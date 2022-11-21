import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CountUpDirective } from '../shared/directives/count-up.directive';
import { HomeImagesService } from './services/home-images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  imagesTemplate: any = undefined;
  imagesTemplate2: any = undefined;
  duration = 2000;
  responsiveOptions;
  observer: IntersectionObserver;
  contactForm: FormGroup;

  options = {
    root: document.querySelector('.observer'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  @ViewChildren(CountUpDirective) countUps:
    | QueryList<CountUpDirective>
    | undefined;

  constructor(private homeImagesService: HomeImagesService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
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
    this.observer = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(this.countUps);
            this.countUps?.forEach((x) => x?.displayCurrentCount());
          } else {
            console.log('not intersecting');
          }
        }),
      this.options
    );

    let targets = document.querySelectorAll('.observer');
    targets.forEach((target) => {
      console.log(target);
      this.observer.observe(target);
    });
  }
  ngOnDestroy(): void {
    let targets = document.querySelectorAll('.fourth-section');
    targets.forEach((target) => {
      this.observer.unobserve(target);
    });
  }

  asignObserver() {
    this.observer = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(this.countUps);
            this.countUps?.forEach((x) => x?.displayCurrentCount());
          } else {
            console.log('not intersecting');
          }
        }),
      this.options
    );

    let targets = document.querySelectorAll('.fourth-section');
    targets.forEach((target) => {
      this.observer.observe(target);
    });
  }

  ngOnInit(): void {
    this.homeImagesService
      .getHomeImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
    console.log('sas');
    this.asignObserver();
  }
  
  linkDonation() {
    document.location.href = 'https://pagolink.niubiz.com.pe/pagoseguro/ONGCAMBIANDOVIDAS/449285';
  }

  onSubmit() {}
}
