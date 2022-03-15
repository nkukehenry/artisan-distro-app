import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.scss'],
})
export class LogModalComponent implements OnInit {
  @Input() data;
  doEdit = false;
  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.log(this.data);;
  }

  editLog() {
    this.doEdit = true;
    this.closeModal();
  }
  closeModal() {
    this.modalController.dismiss({ data: this.data, edit: this.doEdit });
  }

}
