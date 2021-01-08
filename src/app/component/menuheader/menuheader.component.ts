import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.scss'],
})
export class MenuheaderComponent {
  @Input() title: string;
  @Input() showLang: boolean = false;
  @Input() showDealer: boolean = false;
  @Input() back: string;
  constructor(
    public config: ConfigService,
    private modalCtrl: ModalController,
    private router: Router,
    private location: Location
  ) { }



  goToHome() {
    if (this.back === 'back') {
      this.location.back();
    } else {
      this.router.navigate(['home']);
    }
  }


}
