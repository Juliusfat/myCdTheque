import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged} from 'rxjs/operators';
import { ApiDeezerService } from '../../core/api-deezer/api-deezer.service';
import { Album } from '../../core/models/album.model';

@Component({
  selector: 'mycdlibrary-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public loading = false;
  public searchCD : FormControl;
  public myAlbum: Album[];

  constructor( private deezerService: ApiDeezerService) { }

  ngOnInit(): void {
    this.searchCD = new FormControl();
    this.searchCD.valueChanges.pipe(
      debounceTime(500),
      filter(v => (v.length >= 3)),
      distinctUntilChanged()
    ).subscribe( (title) => {
      this.loading = true;
      this.deezerService.getDeezerAlbum(title).subscribe(
        (data: any) => {
          this.myAlbum = data.data;
          this.loading = false;
        }
      )
    }
    )
  }



}
