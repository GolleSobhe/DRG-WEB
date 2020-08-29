import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ElevationDirective } from './elevation.directive';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, FontAwesomeModule],
  declarations: [LoaderComponent, ElevationDirective, SocialIconsComponent, DialogModalComponent],
  exports: [LoaderComponent, SocialIconsComponent, ElevationDirective],
})
export class SharedModule {}
