import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { AlliesComponent } from './allies/allies.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HealthProjectComponent } from './health-project/health-project.component';
import { FoodProjectComponent } from './food-project/food-project.component';
import { EducationalProjectComponent } from './educational-project/educational-project.component';
import { AnimalsProjectComponent } from './animals-project/animals-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProyectsComponent,
    VolunteeringComponent,
    AlliesComponent,
    ContactComponent,
    HealthProjectComponent,
    FoodProjectComponent,
    EducationalProjectComponent,
    AnimalsProjectComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FlexLayoutModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
