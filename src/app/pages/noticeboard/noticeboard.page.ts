import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import { NoticeboardService } from 'src/app/services/noticeboard/noticeboard.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.page.html',
  styleUrls: ['./noticeboard.page.scss'],
})
export class NoticeBoardPage implements OnInit {

  notices: any = [];
  loaded = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(
    private noticeBoardService: NoticeboardService,
    private uiService: UiService,
    private modalController: ModalController

  ) { }

  ngOnInit() {
    this.getHubs();
  }
  getHubs() {
    this.loaded = false;
    this.uiService.showLoader();
    this.noticeBoardService.getNoticeBoardList().subscribe((response) => {
      this.notices = response.message;
      this.loaded = true;
      this.uiService.hideLoader();
    }, error => {
      this.uiService.hideLoader();
    });
  }

  getColor() {
    const colors = ['#ffc', '#cfc', '#ccf', '#ffc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  isEmpty() {
    const accounce = this.notices?.accouncements?.length || 0;
    const colDis = this.notices?.college_discussions?.length || 0;
    const courseDis = this.notices?.course_discussions?.length || 0;
    const exercises = this.notices?.upcoming_exercises?.length || 0;
    const tests = this.notices?.upcoming_tests?.length || 0;
    return (accounce < 1 && colDis < 1 && courseDis < 1 && exercises < 1 && tests < 1) ? true : false;
  }

  async showNotice(notice) {

    const modal = await this.modalController.create({
      component: null,
      componentProps: { data: notice },
      cssClass: 'half-modal'
    });
    await modal.present();

  }

}
