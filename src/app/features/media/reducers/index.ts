
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';


export const featureName = 'mediaFeature';
export interface MediaState {
  list: fromList.MediaState;
}

export const reducers = {
  list: fromList.reducer
};

// selectors

const selectFeature = createFeatureSelector<MediaState>(featureName);

const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

export const {selectAll: selectAllListItems} = fromList.adapter.getSelectors(selectListBranch);

export const selectMediaList = createSelector(
  selectAllListItems,
  m => m as models.MediaListItem[]
);
