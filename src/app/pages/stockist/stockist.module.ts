import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StockistPageRoutingModule } from './stockist-routing.module';
import { StockistPage } from './stockist.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { UiService } from 'src/app/services/ui.service';
import { StockistComponent } from 'src/app/components/stockist/stockist.component';
import { AddstockistComponent } from './forms/addstockist/addstockist.component';
import { StockOrderComponent } from './forms/stockorder/stockorder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockistPageRoutingModule,
    SharedModule
  ],
  declarations: [
    StockistPage,
    StockistComponent,
    AddstockistComponent,
    StockOrderComponent
  ],
  providers: [
    UiService
  ]
})
export class StockistPageModule { }
