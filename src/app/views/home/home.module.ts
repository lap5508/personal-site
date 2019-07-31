import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutes } from './home.routing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SoftwareProjectsComponent } from './software-projects/software-projects.component';

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper';

import { SharedMaterialModule } from 'app/shared/shared-material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    ContactComponent,
    FooterComponent,
    SoftwareProjectsComponent,
    AboutMeComponent,
    SoftwareProjectsComponent,
    JobsComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
