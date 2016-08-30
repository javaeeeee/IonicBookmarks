import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Bookmark} from '../../entities/Bookmark';
import { BookmarkDetailPage } from '../bookmark-detail/bookmark-detail';

const BOOKMARKS: Bookmark[] = [
  { id: 1, url: 'http://github.com', description: 'On-line Git repository' },
  {
    id: 2, url: 'http://bitbucket.com',
    description: 'Another On-line Git repository which allows free private repositories'
  },
  { id: 3, url: 'http://gitlab.com', description: 'Free private Git repositories' },
  { id: 4, url: 'http://medium.com', description: 'Cool reading' },
  { id: 5, url: 'http://stackowerflow.com', description: 'Ask questios when stuck' }
];

/**
 * A component serving as the main page and used to display the bookmark list along with navigation controls.
 * @author Dmitry Noranovich
 */
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [BookmarkDetailPage]
})
export class HomePage {
  selectedBookmark: Bookmark;
  bookmarks = BOOKMARKS;
  constructor(public navCtrl: NavController) {

  }
  onSelect(bm: Bookmark): void {
    this.selectedBookmark = bm;
  }
}
