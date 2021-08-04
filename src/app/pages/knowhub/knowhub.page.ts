import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import { KnowledgeHubService } from 'src/app/services/knowledgehub/knowledge-hub.service';
import { KnowhubModalComponent } from './knowhub-modal/knowhub-modal.component';

@Component({
  selector: 'app-knowhub',
  templateUrl: './knowhub.page.html',
  styleUrls: ['./knowhub.page.scss'],
})
export class KnowHubPage implements OnInit {

  knowHubs: any = [];
  entities: any = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(
    private appBrowser: InAppBrowser,
    private knowledgeHubService: KnowledgeHubService,
    private modalController: ModalController

  ) { }

  ngOnInit() {
    this.getHubs();
  }

  getHubs() {
    this.knowledgeHubService.getKnowledgeHubList().subscribe((response) => {
      this.knowHubs = response.message;
      this.entities = this.knowHubs[0].entities;
    });
  }

  showEntity(entity) {

    if (entity.type === 'url') {
      const options = 'location=yes,hidden=yes,beforeload=no';
      const browser = this.appBrowser.create(entity.articalUrl, '_self', options);
      browser.on('loadstop').subscribe(event => {
        browser.insertCSS({ code: 'body{color: red;' });
        browser.show();
      });

    }
    else {
      this.showEntityModal(entity);
    }
  }

  async showEntityModal(entity) {
    const modal = await this.modalController.create({
      component: KnowhubModalComponent,
      componentProps: { entity }
    });
    await modal.present();
  }



}
