
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as models from '../models';
import { MediaListItem } from '../models';
import * as fromUiHints from './ui-hints.reducer';
import { Action } from 'rxjs/internal/scheduler/Action';

export const featureName = 'mediaFeature';
export interface MediaState {
  list: fromList.MediaState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<MediaState> = {
  list: fromList.reducer,
  uiHints: fromUiHints.reducer
};

// selectors

const selectFeature = createFeatureSelector<MediaState>(featureName);

const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

const selectUiHintsBranch = createSelector(
  selectFeature,
  f => f.uiHints
);

export const {selectAll: selectAllListItems} = fromList.adapter.getSelectors(selectListBranch);

export const selectListFilter = createSelector(
  selectUiHintsBranch,
  b => b.listSort
);


const selectMediaListUnfiltered = createSelector(
  selectAllListItems,
  m => [...m.sort((lhs: MediaListItem, rhs: MediaListItem) => {
    if (lhs.title.toLowerCase() > rhs.title.toLowerCase()){
      return 1;
    }
    if (lhs.title.toLowerCase() < rhs.title.toLowerCase()){
      return -1;
    }
    return 0;
  })] as models.MediaListItem[]
);

export const selectDashboardModel = createSelector(
  selectMediaListUnfiltered,
  m => {
    return {
      numOfBooks: m.filter(b => b.format === 'Book').length,
      numOfGames: m.filter(b => b.format === 'Game').length,
      numOfMovies: m.filter(b => b.format === 'Movie').length,
      numOfShows: m.filter(b => b.format === 'Show').length,

    } as models.DashboardSummary;
  }
);

export const selectMediaList = createSelector(
  selectMediaListUnfiltered,
  selectListFilter,
  (list, filter) => {
    if (filter === 'All'){
      return list;
    } else {
      return list.filter(item => item.format === filter);
    }
  }
);

export const selectMediaLoaded = createSelector(
  selectUiHintsBranch,
  b => b.mediaLoaded
);
