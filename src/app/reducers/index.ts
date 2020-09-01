import {createSelector, select} from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};
const selectCounterBranch = (state: AppState) => state.counter;

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  b => b.current
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
