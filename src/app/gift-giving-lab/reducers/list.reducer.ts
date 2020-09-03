import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { Holiday } from '../models/holidays';
// import { GiftState } from './index';

export interface ListEntity {
  id: string;
  date: Date;
  recipient: string;
  needsCard: boolean;
  needsGift: boolean;
  holidayType: string;
}

export interface GiftState extends EntityState<ListEntity> {

}
export const adapter = createEntityAdapter<ListEntity>();

const initialState: GiftState = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', recipient: 'Sue Jones', holidayType: 'Birthday', date: new Date('Sep 13, 2020'), needsCard: true, needsGift: false },
    2: { id: '1', recipient: 'Bob Smith', holidayType: 'Christmas', date: new Date('Dec 25, 2020'), needsCard: true, needsGift: true },
    3: { id: '1', recipient: 'Jeff Gonzalez ', holidayType: 'Birthday', date: new Date('Apr 20, 2020'), needsCard: true, needsGift: false }
  }
};
const reducerFunction = createReducer(
  initialState,
  on(actions.addedGiftItem, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.loadGiftDataSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.addedGiftSucceeded, (s, a) => {
    const tempState = adapter.removeOne(a.tempId, s);
    return adapter.addOne(a.payload, tempState);
  }),
 );

export function reducer(state: GiftState = initialState, action: Action): GiftState {
  return reducerFunction(state, action);
}
