import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Bookmark} from '../../entities/Bookmark';

/*
  Generated class for the BookmarkDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
/**
 * A component used to display bookmark detail.
 * @author Dmitry Noranovich
 */
@Component({
  selector: 'bookmark-detail',
  templateUrl: 'build/pages/bookmark-detail/bookmark-detail.html',
})
export class BookmarkDetailPage {
  @Input() selectedBookmark: Bookmark;
  constructor(private navCtrl: NavController) {

  }

}
