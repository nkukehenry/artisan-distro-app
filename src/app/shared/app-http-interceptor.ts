//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  loaderToShow: any;
  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'api-token';

    console.log(request);

    //Authentication by setting header with token value
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          if (!event.body.success) {
            this.showAlert('Request Failed');
          }
        }
        this.hideLoader();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.hideLoader();
        return throwError(error);
      }));
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
  }

  hideLoader() {
    try {
      this.loadingController.getTop().then(v => v ? this.loadingController.dismiss() : null);
    } catch (error) {
      //
    }
  }

  async showAlert(message) {

    const alert = await this.alertController.create({
      mode: 'ios',
      message,
      header: 'Failure',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: () => {
        //     console.log('Confirm Cancel');
        //   }
        // }, 
        {
          text: 'OK',
          handler: () => {
            console.log('Close Ok');
          }
        }
      ]
    });
    await alert.present();
  }
}
