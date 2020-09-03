import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftDashboard } from '../../models';
import { GiftState } from '../../reducers/list.reducer';
import { Store, select } from '@ngrx/store';
import { selectDashboardModel } from '../../reducers';

@Component({
  selector: 'app-gift-dashboard',
  templateUrl: './gift-dashboard.component.html',
  styleUrls: ['./gift-dashboard.component.scss']
})
export class GiftDashboardComponent implements OnInit {
  model$: Observable<GiftDashboard>;
  constructor(private store: Store<GiftState>) { }

  ngOnInit(): void {
    this.model$ = this.store.pipe(
      select(selectDashboardModel)
    );
  }

}
