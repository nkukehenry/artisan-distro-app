import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.authState.next(true);
    //return;//simulating a success
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  login() {
    const request = {
      username: '007',
      password: 'test'
    };
    this.storage.set('USER_INFO', request).then((response) => {
      this.router.navigate(['home']);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['home']);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }

}
