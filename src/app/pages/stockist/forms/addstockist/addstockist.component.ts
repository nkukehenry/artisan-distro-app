import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-addstockist',
  templateUrl: './addstockist.component.html',
  styleUrls: ['./addstockist.component.scss'],
})
export class AddstockistComponent implements OnInit {

  @Input() data: any;
  constructor(
    private modalController: ModalController,
    private uiService: UiService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.data = this.data || {};
  }

  submit() {
    this.closeModal(true);
  }
  closeModal(data) {
    this.modalController.dismiss({ status: data });
  }

}
