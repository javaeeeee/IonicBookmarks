import { Component, ViewChild, OnInit } from '@angular/core';
import { ionicBootstrap, Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page } from './classes/page';

import { APP_TITLE } from './consts/consts';

import { HomePage } from './pages/home/home';
import { LoginPage } from './pages/login/login';
import { UserProfilePage } from './pages/user-profile/user-profile';


@Component({
  templateUrl: 'build/app.html',
  providers: []
})
export class MyApp implements OnInit {
  /**
   * Navigation component is injected here using its name in the template.
   */
  @ViewChild('iNav') nav: Nav;
  rootPage: any = LoginPage;
  /**
   * Array of available pages.
   */
  pages: Page[];
  /**
   * Constructor with all the necessary injections.
   */
  constructor(private platform: Platform) {
    this.pages = [
      new Page(APP_TITLE, HomePage),
      new Page('Edit User Profile', UserProfilePage)
    ];
  }
  /**
   * Component initialization method implementation from OnInit interface.
   */
  ngOnInit(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  goToPage(page: Page): void {
    this.nav.setRoot(page.component, { 'title': page.title });//
  }
}

ionicBootstrap(MyApp);
