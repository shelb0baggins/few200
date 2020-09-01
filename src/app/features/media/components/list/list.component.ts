import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaListItem } from '../../models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MediaState } from '../../reducers/list.reducer';
import { selectMediaList } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  items$: Observable<MediaListItem[]>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectMediaList)
    );
  }

}
