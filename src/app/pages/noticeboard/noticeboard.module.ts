import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeBoardPageRoutingModule } from './noticeboard-routing.module';
import { NoticeBoardPage } from './noticeboard.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { NoticeboardService } from 'src/app/services/noticeboard/noticeboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeBoardPageRoutingModule,
    SharedModule
  ],
  declarations: [
    NoticeBoardPage,
  ],
  providers: [
    NoticeboardService
  ]
})
export class NoticeBoardPageModule { }
