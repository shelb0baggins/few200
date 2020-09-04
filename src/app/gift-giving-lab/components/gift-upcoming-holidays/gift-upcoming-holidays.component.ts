import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Holiday } from '../../models/holidays';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GiftState } from '../../reducers/list.reducer';
import { selectGiftList } from '../../reducers';

@Component({
  selector: 'app-gift-upcoming-holidays',
  templateUrl: './gift-upcoming-holidays.component.html',
  styleUrls: ['./gift-upcoming-holidays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftUpcomingHolidaysComponent implements OnInit {
  currentDate = new Date();
  gifts: Holiday[];
  gifts$: Observable<Holiday[]>;

  constructor(private store: Store<GiftState>, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.gifts$ = this.store.pipe(
      select(selectGiftList)
    );
    this.gifts$.subscribe(a => {this.gifts = a;
      this.changeDetector.markForCheck();
    }

      );
    //   this.currentDate = new Date();
    //   var d = this.currentDate.getDate().toString();
    //   var m = this.currentDate.getMonth().toString();
    //   var y = this.currentDate.getFullYear().toString();
    //   //"2020-09-12"
    // this.currentDate = (y + '' + m + '-' + d).toString();

    }

  }

