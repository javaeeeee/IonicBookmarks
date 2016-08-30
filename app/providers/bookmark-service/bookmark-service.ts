import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Bookmark} from '../../entities/Bookmark';
import { BOOKMARKS } from '../../mocks/mock-bookmarks';

import 'rxjs/add/operator/map';

/*
  Generated class for the BookmarkService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/**
 * A service to provide a bookmark list to the application.
 * @author Dmitry Noranovich
 */
@Injectable()
export class BookmarkService {

  constructor(private http: Http) { }
  /**
   * A method to produce lists of bookmarks.
   */
  getBookmarks(): Promise<Bookmark[]> {
    return Promise.resolve(BOOKMARKS);
  }
}

