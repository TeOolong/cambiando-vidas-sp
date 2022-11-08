import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlliesComponent } from './allies/allies.component';
import { ContactComponent } from './contact/contact.component';
import { HealthProjectComponent } from './health-project/health-project.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { CustomMenuComponent } from './shared/custom-menu/custom-menu.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: CustomMenuComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'proyects', component: ProyectsComponent },
      { path: 'volunteering', component: VolunteeringComponent },
      { path: 'allies', component: AlliesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'health-project', component: HealthProjectComponent },
    ],
  },
  {
    path: '**',
    component: CustomMenuComponent,
    children: [{ path: '', component: NotFoundComponent }],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
