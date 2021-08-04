import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeBoardPage } from './noticeboard.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeBoardPageRoutingModule { }
