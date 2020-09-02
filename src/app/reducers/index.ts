import {createSelector, select, ActionReducerMap} from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromUiHints from './ui-hints.reducer';


export interface AppState {
counter: fromCounter.CounterState;
uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  uiHints: fromUiHints.reducer
};
const selectCounterBranch = (state: AppState) => state.counter;
const selectUiHintsBranch = (state: AppState) => state.uiHints;
export const selectCurrentCount = createSelector(
  selectCounterBranch,
  b => b.current
);

export const selectHasError = createSelector(
  selectUiHintsBranch,
  f => f.hasError
);


export const selectError = createSelector(
  selectUiHintsBranch,
  f => f.error
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
  );
// selector funcs


export const selectAtZero = createSelector(
  selectCurrentCount,
  c => c === 0
);
