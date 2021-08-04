
import { Store } from '@ngxs/store';
import { HttpService } from '../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { SavePhoto} from 'src/app/state/data.action';
import { NgxSpinnerService } from "ngx-spinner"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private httpService: HttpService, private store: Store, private spinner: NgxSpinnerService) { }
  page: number = 1;
  arrayOfPhotos: any;
  isNone: boolean = false;

  ngOnInit(): void {
  }


  searchResult(keyword: string) {
    this.spinner.show()
    this.isNone = false
    this.httpService.getData(keyword).subscribe((data) => {
      let photos = this.arrayOfPhotos = data.photos.photo
      if (!photos.length) {
        this.isNone = true
      }
      this.spinner.hide()
    })
  }

  savePhoto(item: any) {
    const idPhoto = item.id;
    const urlPhoto = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
    const photos = {id: idPhoto, url: urlPhoto}
    this.store.dispatch(new SavePhoto(photos))
  }
}
