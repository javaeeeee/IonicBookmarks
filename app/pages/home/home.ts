import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Bookmark} from '../../entities/Bookmark';
import { BookmarkDetailPage } from '../bookmark-detail/bookmark-detail';
import { BookmarkService } from '../../providers/bookmark-service/bookmark-service';

/**
 * A component serving as the main page and used to display the bookmark list along with navigation controls.
 * @author Dmitry Noranovich
 */
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [BookmarkDetailPage],
  providers: [BookmarkService]
})
export class HomePage implements OnInit {
  selectedBookmark: Bookmark;
  bookmarks: Bookmark[];
  constructor(public navCtrl: NavController, private bookmarkService: BookmarkService) {

  }
  /**
   * Method provides initialization of the bookmark list. 
   * Implements the method from the OnInit interface. 
   * Uses initialization lifecycle hook.
   */
  ngOnInit(): void {
    this.getBookmarks();
  }
  private getBookmarks(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
  /**
   * Method to process a bookmark click in order to display bookmark info.
   */
  onSelect(bm: Bookmark): void {
    this.selectedBookmark = bm;
  }
}
