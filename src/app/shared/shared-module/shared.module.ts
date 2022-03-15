import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StockistService } from 'src/app/services/stockist/stockist.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { TransactService } from 'src/app/services/transact/transact.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { StatusModalComponent } from 'src/app/components/status-modal/status-modal.component';

@NgModule({
  declarations: [
    MenuButtonComponent,
    StatusModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    SQLite,
    SQLitePorter],
  exports: [
    MenuButtonComponent,
    StockistService,
    ProductsService,
    TransactService,
    StatusModalComponent,
    SQLite,
    SQLitePorter
  ]
})
export class SharedModule { }
