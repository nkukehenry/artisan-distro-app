import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { KnowHubPageRoutingModule } from './knowhub-routing.module';
import { KnowHubPage } from './knowhub.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { KnowhubModalComponent } from './knowhub-modal/knowhub-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowHubPageRoutingModule,
    SharedModule
  ],
  declarations: [
    KnowHubPage,
    KnowhubModalComponent
  ],
  providers: [
    InAppBrowser
  ]
})
export class KnowHubPageModule { }
