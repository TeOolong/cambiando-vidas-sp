import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CountUpDirective } from './directives/count-up.directive';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CustomMenuComponent,
    NotFoundComponent,
    CountUpDirective,
    FooterComponent,
  ],
  providers: [DecimalPipe],
  imports: [CommonModule, MaterialModule, RouterModule, FontAwesomeModule],
  exports: [CustomMenuComponent, CountUpDirective, FooterComponent],
})
export class SharedModule {}
