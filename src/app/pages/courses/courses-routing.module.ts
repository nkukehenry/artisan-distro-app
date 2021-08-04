import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPage } from './courses.page';
import courseTabRoutes from './course-routes';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage,
    children: courseTabRoutes //moved to seprated file
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
