import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Holiday } from '../../models/holidays';
import { Store, select } from '@ngrx/store';
import { GiftState, selectGiftList } from '../../reducers/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-gift-past-holidays',
  templateUrl: './gift-past-holidays.component.html',
  styleUrls: ['./gift-past-holidays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftPastHolidaysComponent implements OnInit {
  currentDate = new Date();
  gifts: Holiday[];
  gifts$: Observable<Holiday[]>;
  // gifts: Holiday[] = [
  //   { id: '1', recipient: 'Sue Jones', holidayType: 'Birthday', date: new Date('Sep 13, 2020'), needsCard: true, needsGift: false },
  //   { id: '1', recipient: 'Bob Smith', holidayType: 'Christmas', date: new Date('Dec 25, 2020'), needsCard: true, needsGift: true },
  //   { id: '1', recipient: 'Jeff Gonzalez ', holidayType: 'Birthday', date: new Date('Apr 20, 2020'), needsCard: true, needsGift: false }
  // ];

  constructor(private store: Store<GiftState>, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.gifts$ = this.store.pipe(
      select(selectGiftList)
    );
    this.gifts$.subscribe(a => {this.gifts = a;
      this.changeDetector.markForCheck();
    });
  }

}
