import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertfnService {

  constructor(
    private alertController: AlertController,
  ) { }

  async exitApp(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            navigator['app'].exitApp();
          }
        },
        //  {
        //   text: 'Okay',
        //   handler: () => {
        //     localStorage.clear();
        //     this.storage.clear().then(() => {
        //       console.log('all keys are cleared');
        //     });
        //     this.router.navigateByUrl('/login');
        //     console.log('Confirm Okay');
        //   }
        // }
      ]
    });
    await alert.present();
  }

  async msgAlertFn(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled Clicked');
          }
        },
        //  {
        //   text: 'Okay',
        //   handler: () => {
        //     localStorage.clear();
        //     this.storage.clear().then(() => {
        //       console.log('all keys are cleared');
        //     });
        //     this.router.navigateByUrl('/login');
        //     console.log('Confirm Okay');
        //   }
        // }
      ]
    });
    await alert.present();
  }
}
