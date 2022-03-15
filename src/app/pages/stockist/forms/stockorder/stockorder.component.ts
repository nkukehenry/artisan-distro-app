import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';
import { StockistService } from 'src/app/services/stockist/stockist.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-stockorder',
  templateUrl: './stockorder.component.html',
  styleUrls: ['./stockorder.component.scss'],
})
export class StockOrderComponent implements OnInit {

  @Input() data: any;
  products: any = [];
  newrow: any = {};
  stockists = [];

  constructor(
    private modalController: ModalController,
    private uiService: UiService,
    private productsService: ProductsService,
    private stockistService: StockistService
  ) { }

  ngOnInit() {
    this.data = this.data || {};
    this.getProducts();
    this.getStockists();
  }

  getProducts() {
    this.productsService.all().then(res => {
      this.products = res;
    });
  }

  getStockists() {
    this.stockistService.all().then(res => {
      this.stockists = res;
    });
  }

  addRow() {

    if (!this.data.products) {
      this.data.products = [];
    }

    // const product = this.getProduct(this.newrow.id);
    //console.log(product);
    //this.newrow.name = product.name;
    if (this.newrow.name && this.newrow.qnty) {
      this.data.products.push(this.newrow);
      this.newrow = {};
    }
  }

  removeRow(index) {
    this.data.products.splice(index, 1);
  }

  getProduct(id) {
    const products = this.products.filter((prod) => prod.id === id);
    console.log(products);
    return products;
  }

  submit() {
    this.closeModal(true);
  }
  closeModal(data) {
    this.modalController.dismiss({ status: data });
  }

}
