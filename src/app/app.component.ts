import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/auth/authentication.service';
import { sideMenu, extraMenu } from './shared/side_menu';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //menus moved to shared/side_menu
  public mainMenu = sideMenu;
  public extraMenu = extraMenu;
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // let status bar overlay webview
      // this.statusBar.overlaysWebView(true);
      // set status bar to white
      // this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
      this.authService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });

    });
  }
}
