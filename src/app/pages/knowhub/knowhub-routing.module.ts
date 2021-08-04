import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowHubPage } from './knowhub.page';

const routes: Routes = [
  {
    path: '',
    component: KnowHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowHubPageRoutingModule { }
