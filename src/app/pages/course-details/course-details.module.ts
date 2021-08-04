import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDetailsPageRoutingModule } from './course-details-routing.module';

import { CourseDetailsPage } from './course-details.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { LessonsComponent } from './lessons/lessons.component';
import { OverviewComponent } from './overview/overview.component';
import { ForumsComponent } from './forums/forums.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    CourseDetailsPage,
    LessonsComponent,
    OverviewComponent,
    ForumsComponent
  ]
})
export class CourseDetailsPageModule { }
