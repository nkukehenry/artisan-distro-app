import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-knowhub-modal',
  templateUrl: './knowhub-modal.component.html',
  styleUrls: ['./knowhub-modal.component.scss'],
})
export class KnowhubModalComponent implements OnInit {

  @Input() entity;
  constructor(private modalController: ModalController) { }
  ngOnInit() {

    console.log(this.entity);
  }

  getType(type) {
    if (type.indexOf('pdf') > -1) {
      return 0;
    } else if (type.indexOf('audio') > -1) {
      return 1;
    } else {
      return 2;
    }
  }
  closeModal() {
    this.modalController.dismiss();
  }

}
