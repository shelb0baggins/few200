import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/ui-hints.action';
import * as giftActions from '../actions/list.actions';
export interface UiHintsState {
  listSort: string;
  mediaLoaded: boolean;
}

const initialState: UiHintsState = {
  listSort: 'All',
  mediaLoaded: false
};

const reducerFunction = createReducer(
  initialState,
  on(actions.giftFilterSet, (s, a) => ({ ...s, listSort: a.by })),
  on(giftActions.loadGiftData, giftActions.loadGiftDataFailed, (s) => ({ ...s, mediaLoaded: false })),
  on(giftActions.loadGiftDataSucceeded, (s) => ({ ...s, mediaLoaded: true }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return reducerFunction(state, action);
}
