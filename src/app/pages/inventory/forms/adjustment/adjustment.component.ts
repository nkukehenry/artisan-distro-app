import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';
import { TransactService } from 'src/app/services/transact/transact.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.scss'],
})
export class AdjustmentComponent implements OnInit {

  @Input() products: any;

  today = new Date();
  date = this.today.toISOString().split('T')[0];
  data: any = {
    date: this.date,
    client_id: 1,
    warehouse_id: 1,
    statut: 'ordered',
    notes: 'Ordered from App',
    tax_rate: 0,
    TaxNet: 0,
    discount: 0,
    shipping: 0,
    GrandTotal: 0,
    details: [],
    payment: {
      status: 'pending',
      Reglement: 'Cash'
    }
  };

  newrow: any = {};

  constructor(
    private modalController: ModalController,
    private uiService: UiService,
    private productsService: ProductsService,
    private tranService: TransactService) { }

  ngOnInit() {
    this.products = this.products;
  }

  addRow() {

    const product = this.getProduct(this.newrow.code);
    const existIndex = this.productInCart(this.newrow.code);

    if (existIndex !== -1) {
      const row = this.data.details[existIndex];

      console.log('new', this.newrow);
      console.log('old', row);
      const qnty = parseInt(row.quantity, 10) + parseInt(this.newrow.quantity, 10);
      console.log('Qnty', qnty);
      this.newrow.quantity = qnty;
      this.data.GrandTotal = (this.data.GrandTotal - row.subtotal);
      this.data.details.splice(existIndex, 1);
    }

    console.log('new', this.newrow);

    this.newrow.name = product.name;
    this.newrow.unit = product.unit;
    this.newrow.Unit_price = product.price;
    this.newrow.Net_price = product.price;
    this.newrow.stock = product.quantity;
    this.newrow.discount = 0;
    this.newrow.tax_percent = 0;
    this.newrow.taxe = 0;
    this.newrow.tax_method = 0;
    this.newrow.product_id = product.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.newrow.product_variant_id = null,
      this.newrow.DiscountNet = 0;
    this.newrow.discount_Method = 2;
    this.newrow.subtotal = (product.price * this.newrow.quantity);
    this.data.GrandTotal = this.data.GrandTotal + this.newrow.subtotal;

    if (this.newrow.name && this.newrow.quantity) {
      this.data.details.push(this.newrow);
      this.newrow = {};
    }

  }

  removeRow(index) {
    const product = this.data.details[index];
    this.data.GrandTotal = this.data.GrandTotal - product.subtotal;
    this.data.details.splice(index, 1);
  }

  getProduct(code) {
    const products = this.products.filter((prod) => prod.code === code);
    return products[0];
  }

  productInCart(code) {
    const index = this.data.details.findIndex((prod) => prod.code === code);
    return index;
  }

  submit() {
    this.uiService.showLoader('Submitting order...');
    this.tranService.postOrder(this.data).subscribe(response => {
      this.uiService.hideLoader();
      console.log(response);
      if (response.success) {
        //this.uiService.showAlert('Order submitted', 'Your order has been received, please endevour to pay in time');
        this.closeModal(true);
      }
    }, error => {
      console.log(error);
    });
  }
  closeModal(data) {
    this.modalController.dismiss({ status: data });
  }

}
