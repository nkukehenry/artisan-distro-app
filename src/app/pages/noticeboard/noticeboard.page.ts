import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NoticeboardService } from 'src/app/services/noticeboard/noticeboard.service';

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
    private noticeBoardService: NoticeboardService

  ) { }

  ngOnInit() {
    this.getHubs();
  }
  getHubs() {
    this.loaded = false;
    this.noticeBoardService.getNoticeBoardList().subscribe((response) => {
      this.notices = response.message;
      this.loaded = true;
    });
  }

  getColor() {
    const colors = ['#ffc', '#cfc', '#ccf', '#ffc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }


}
