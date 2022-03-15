import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogModalComponent } from 'src/app/components/log-modal/log-modal.component';
import { DataService } from 'src/app/services/data.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UiService } from 'src/app/services/ui.service';
import { AdjustmentComponent } from './forms/adjustment/adjustment.component';
import { ItemDetailsComponent } from './modals/item-details/item-details.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {


  categories = [
    { name: 'Add Stock', icon: 'assets/icon/addstock.png', component: AdjustmentComponent },
    { name: 'Stock Orders', icon: 'assets/icon/orders.png', component: null },
    { name: 'Price Lists', icon: 'assets/icon/pricelist.png', component: null },
    { name: 'Stock Report', icon: 'assets/icon/reports.png', component: null },
  ];
  products: any = [];
  loaded = true;

  constructor(
    private modalController: ModalController,
    private uiService: UiService,
    private productService: ProductsService,
    private dataService: DataService

  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(response => {
      this.dataService.log(response);
      this.products = response.products;
    }, error => {
      this.dataService.log(error);
    });
  }


  async showFormModal(component, params = {}) {
    if (component !== null) {
      const modal = await this.modalController.create({
        component,
        componentProps: { products: this.products }
      });
      await modal.present();
      const { data } = await modal.onWillDismiss();
      if (data.status) {
        this.uiService.statusModal('Order placed successfuly', true);
      }
    }
  }

  async showItemModal(selItem) {
    const modal = await this.modalController.create({
      component: ItemDetailsComponent,
      componentProps: { item: selItem }
    });
    await modal.present();

  }


  isEmpty() {
    return true;
  }







}
