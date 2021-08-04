import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { DeletePhoto } from 'src/app/state/data.action';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  savedPhotos: [] = []

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.subscribe(el => {
      this.savedPhotos = el.SavedPhoto?.photos.map((item: any) => item.url)
    })
  }

  deleteCourse(photoUrl: string) {
    this.store.dispatch(new DeletePhoto(photoUrl));
  }


}
