import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresidentComponent } from '@app/president/president.component';
import { SharedModule } from '@app/@shared';
import { RegisterComponent } from '@app/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    I18nModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    FooterComponent,
    PresidentComponent,
    RegisterComponent,
    LoginComponent,
    ProjectListComponent,
    ProjectItemComponent,
  ],
})
export class ShellModule {}
