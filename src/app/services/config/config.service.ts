import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public rootUrl = 'http://kbgJson.brainmagicllc.com/';
  lsLang = 'en';
  lsUserDetails: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private menu: MenuController,
  ) { }

  getLang() {
    return localStorage.getItem('lsLang');
  }


  getData(url): Observable<any> {
    const geturl = `${this.rootUrl}${url}`;
    return this.http.get(geturl);
  }

  postData(url, formData): Observable<any> {
    const apiURL = `${this.rootUrl}${url}`;
    return this.http.post(apiURL, formData);
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
