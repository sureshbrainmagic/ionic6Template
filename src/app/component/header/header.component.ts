import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  @Input() title: string;
  @Input() url: string = 'home';
  constructor(
    private router: Router,
    private location: Location
  ) { }


  goToHome() {
    // this.router.navigate(['home']);
    // this.router.navigateByUrl(this.url);
    if (this.url === 'home') {
      this.router.navigate(['home']);
    } else {
      this.location.back();
    }
  }
  // goToHome() {
  //   this.router.navigate(['home']);
  // }

}
