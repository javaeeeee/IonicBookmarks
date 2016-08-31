import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  /**
   * The selected bookmark for which detail are to be shown.
   */
  selectedBookmark: Bookmark;
  /**
   * The list of bookmarks to be dispalyed.
   */
  bookmarks: Bookmark[];
  /**
   * The title of the page.
   */
  title: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private bookmarkService: BookmarkService) {
    this.title = navParams.get('title');
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
    this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks)
      .catch(err => console.log(err));
  }
  /**
   * Method to process a bookmark click in order to display bookmark info.
   */
  onSelect(bm: Bookmark): void {
    this.selectedBookmark = bm;
  }
}
