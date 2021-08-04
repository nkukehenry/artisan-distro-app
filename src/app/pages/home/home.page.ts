import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories = [
    { name: 'Courses', icon: 'assets/icon/course.png', link: 'courses' },
    { name: 'Knowledge Hub', icon: 'assets/icon/khub.png', link: 'knowledgehub' },
    { name: 'Notice Board', icon: 'assets/icon/notice.png', link: 'noticeboard' },
    { name: 'E-Portifolio', icon: 'assets/icon/portfolio.png', link: 'courses' },
    { name: 'Forums', icon: 'assets/icon/forum.png', link: 'courses' },
    { name: 'My Profile', icon: 'assets/icon/profile.png', link: 'courses' },
  ];

  exitcounter = 0;

  constructor(
    private menu: MenuController,
    private router: Router,
    private platform: Platform,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.handleBack();
  }

  toggleMenu() {
    this.menu.toggle();
  }

  handleBack() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called! on ' + this.router.url);

      if (this.router.url === '/courses/home' || this.router.url === '/login') {
        if (this.exitcounter < 1
        ) {
          this.exitcounter++;
          this.showExitToast();
        } else {
          navigator['app'].exitApp();
        }
      } else {
        this.navCtrl.back();
      }
    });

  }

  async showExitToast() {
    const toast = await this.toastCtrl.create({
      message: 'Press back again to exit',
      duration: 3000
    });
    await toast.present();
    //reset counter after 5 seconds
    setTimeout(() => {
      this.exitcounter = 0;
    }, 5000);
  }

}
