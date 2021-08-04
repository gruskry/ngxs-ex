import { NgModule } from '@angular/core';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [SharedModule, BookmarksRoutingModule],
  exports: [],
  declarations:[BookmarksComponent],
})
export class BookmarksModule { }
