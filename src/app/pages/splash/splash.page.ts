import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  exitcounter = 0;
  route;

  constructor(
    private menu: MenuController,
    private router: Router,
    private platform: Platform,
    private navCtrl: NavController,
    private authService: AuthenticationService

  ) { }

  ngOnInit() {
    this.menu.enable(false);
    this.handleBack();
    setTimeout(() => { this.login(); }, 3000);
  }

  handleBack() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      // console.log('Handler was called! on ' + this.router.url);

      if (this.router.url === '/courses/splash' || this.router.url === '/splash') {

        navigator['app'].exitApp();

      } else {
        this.navCtrl.back();
      }
    });

  }

  login() {
    this.authService.authState.subscribe(state => {
      this.route = (state) ? 'home' : 'login';
      this.goTo();
    });
  }

  goTo() {
    (this.route == 'home') ? this.menu.enable(true) : null;
    this.router.navigate([this.route]);
  }



}
