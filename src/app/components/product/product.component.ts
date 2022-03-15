import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemDetailsComponent } from 'src/app/pages/inventory/modals/item-details/item-details.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product;
  constructor(private dataService: DataService, private modalController: ModalController) { }
  ngOnInit() {
    this.dataService.log(this.product);
  }


}
