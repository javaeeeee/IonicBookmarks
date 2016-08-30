import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Bookmark} from '../../entities/Bookmark';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  bookmark: Bookmark = new Bookmark(1, 'http://github.com', 'On-line Git repository');
  constructor(public navCtrl: NavController) {

  }
}
