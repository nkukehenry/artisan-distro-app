import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageRoutingModule } from './courses-routing.module';

import { CoursesPage } from './courses.page';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { CourseListComponent } from 'src/app/components/course-list/course-list.component';
import { CoursesService } from 'src/app/services/course/courses.service';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';
import { PastCoursesComponent } from './past-courses/past-courses.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CoursesPageRoutingModule,
  ],
  declarations: [
    CoursesPage,
    CategoriesComponent,
    FeaturedCoursesComponent,
    UpcomingCoursesComponent,
    CurrentCoursesComponent,
    PastCoursesComponent,
    CourseListComponent
  ],
  providers: [CoursesService]
})
export class CoursesPageModule { }
