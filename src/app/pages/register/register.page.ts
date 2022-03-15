import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any = {};
  exitcounter = 0;
  isNewForm = true;
  passType = 'password';
  appName = 'ESCACOP East, Central and Southern Africa College of Physicians';

  constructor(
    private menu: MenuController,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private uiService: UiService

  ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  doRegister() {
    this.uiService.showLoader();
    this.authService.remoteRegister(this.data).subscribe(
      (response) => {
        this.uiService.hideLoader();
        if (response?.success === true) {
          this.data = {};
          this.authService.getIn(response.message);
        }
      }, error => {
        this.uiService.hideLoader();
        this.uiService.showToast('Could not reach the server');
      });
  }

  toggleType() {
    this.passType = (this.passType === 'password') ? 'text' : 'password';
  }

}
