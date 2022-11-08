import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactImagesService } from '../home/services/contact-images.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  imagesTemplate: any = undefined;
  contactForm: FormGroup;
  constructor(private contactImagesService: ContactImagesService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.contactImagesService
      .getContactImagesTemplate()
      .subscribe((template: any) => (this.imagesTemplate = template));
  }

  onSubmit() {}
}
