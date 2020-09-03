import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as models from '../models';
import { Holiday } from '../models/holidays';
import * as fromList from './list.reducer';
import * as fromUiHints from '../reducers/ui-hints.reducer';
import { filter } from 'rxjs/operators';

export const featureName = 'giftFeature';
export interface GiftState {
  list: fromList.GiftState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<GiftState> = {
  list: fromList.reducer,
  uiHints: fromUiHints.reducer
};
const selectFeature = createFeatureSelector<GiftState>(featureName);

const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

const selectUiHintsBranch = createSelector(
  selectFeature,
  f => f.uiHints
);
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.
export const selectListFilter = createSelector(
  selectUiHintsBranch,
  b => b.listSort
);

const selectGiftListUnfiltered = createSelector(
  selectAllListItems,
  m => [...m.sort((upcoming: Holiday, past: Holiday) => {
    if (upcoming.date > new Date()) {
      return 1;
    }
    if (upcoming.date < new Date()) {
      return -1;
    }
    return 0;
  }).map(r => ({ ...r, isTemporary: r.id.startsWith('TEMP') }))] as models.Holiday[]
);

export const selectDashboardModel = createSelector(
  selectGiftListUnfiltered,
  m => {
    return {
      numOfGifts: m.filter(b => b.needsGift).length,
      numOfCards: m.filter(b => b.needsCard).length,
      numOfHolidays: m.filter(b => b.date > new Date()).length
    } as unknown as models.GiftDashboard;
  }
);

export const selectGiftList = createSelector(
  selectGiftListUnfiltered,
  selectListFilter,
  (list, filter) => {
    if (filter) {
      return list;
  }
}
);
