import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { LogModalComponent } from 'src/app/components/log-modal/log-modal.component';
import { StockistService } from 'src/app/services/stockist/stockist.service';
import { UiService } from 'src/app/services/ui.service';
import { AddstockistComponent } from './forms/addstockist/addstockist.component';
import { StockOrderComponent } from './forms/stockorder/stockorder.component';

@Component({
  selector: 'app-stockist-page',
  templateUrl: './stockist.page.html',
  styleUrls: ['./stockist.page.scss'],
})
export class StockistPage implements OnInit {


  categories = [
    { name: 'Add Stockist', icon: 'assets/icon/addstockist.png', component: AddstockistComponent },
    { name: 'New Order', icon: 'assets/icon/stockrequests.png', component: StockOrderComponent },
    { name: 'Sales Report', icon: 'assets/icon/salesreport.png', component: null },
    { name: 'Profiles', icon: 'assets/icon/profiles.png', component: null },
  ];
  stockists: any = [];
  loaded = true;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private uiService: UiService,
    private stockistService: StockistService

  ) { }

  ngOnInit() {
    this.getStockists();
  }

  getStockists() {

    this.stockistService.all().then(response => {
      this.stockists = response;
    }, error => {
      //log
    });
  }


  async showFormModal(component, param = {}) {

    if (component !== null) {
      const modal = await this.modalController.create({
        component,
        componentProps: { param }
      });
      await modal.present();

      const { data } = await modal.onWillDismiss();
      console.log(data);
      if (data.status) {
        this.uiService.statusModal('Stock added successfuly', true);
      }
    }

  }

  isEmpty() {
    return true;
  }







}
