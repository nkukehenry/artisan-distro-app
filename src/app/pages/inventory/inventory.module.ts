import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InventoryPageRoutingModule } from './inventory-routing.module';
import { InventoryPage } from './inventory.page';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { UiService } from 'src/app/services/ui.service';
import { ProductComponent } from 'src/app/components/product/product.component';
import { AdjustmentComponent } from './forms/adjustment/adjustment.component';
import { ItemDetailsComponent } from './modals/item-details/item-details.component';
import { StatusModalComponent } from 'src/app/components/status-modal/status-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPageRoutingModule,
    SharedModule
  ],
  declarations: [
    InventoryPage,
    ProductComponent,
    AdjustmentComponent,
    StatusModalComponent,
    ItemDetailsComponent
  ],
  providers: [
    UiService
  ]
})
export class InventoryPageModule { }
