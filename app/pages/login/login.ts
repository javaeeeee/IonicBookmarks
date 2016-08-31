import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { APP_TITLE } from '../../consts/consts';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
/**
 * Class provides methods for login functionality.
 * @author Dmitry Noranovich.
 */
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: []
})
export class LoginPage {

  /**
   * User name in the login form.
   */
  username: string;
  /**
   * Password in the login form.
   */
  password: string;

  constructor(private navCtrl: NavController) {

  }
  /**
   * Method provides Log In functionality.
   */
  login(): void {
    this.navCtrl.setRoot(HomePage, { 'title': APP_TITLE });
  }
  /**
   * A method to redirect to the registration page.
   */
  register(): void {
    this.navCtrl.push(RegisterPage);
  }
}
