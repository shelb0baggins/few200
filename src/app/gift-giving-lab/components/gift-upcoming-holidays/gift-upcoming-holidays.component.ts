import { Component, OnInit } from '@angular/core';
import { Holiday } from '../../models/holidays';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GiftState } from '../../reducers/list.reducer';
import { selectGiftList } from '../../reducers';

@Component({
  selector: 'app-gift-upcoming-holidays',
  templateUrl: './gift-upcoming-holidays.component.html',
  styleUrls: ['./gift-upcoming-holidays.component.scss']
})
export class GiftUpcomingHolidaysComponent implements OnInit {
  currentDate = new Date();
  gifts: Holiday[];
  gifts$: Observable<Holiday[]>;

  constructor(private store: Store<GiftState>) { }

  ngOnInit(): void {
    this.gifts$ = this.store.pipe(
      select(selectGiftList)
    );
    this.gifts$.subscribe(a => this.gifts = a);
  }

  }

