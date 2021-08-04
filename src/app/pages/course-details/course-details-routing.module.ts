import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import courseDetailsTabRoutes from './course-tabs-routes';

import { CourseDetailsPage } from './course-details.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsPage,
    children: courseDetailsTabRoutes //moved to seprated file
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailsPageRoutingModule { }
