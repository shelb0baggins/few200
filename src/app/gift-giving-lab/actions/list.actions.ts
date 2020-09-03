import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';
let currentId = 0;

export const addedGiftItem = createAction(
  '[Gift] Gift item added',
  ({ recipient, date, needsCard, needsGift, holidayType }: {
    recipient: string,
    holidayType: string, date: Date,
    needsGift: boolean, needsCard: boolean }) => ({
    payload: {
        recipient, date, needsCard, needsGift, holidayType,
        id: 'TEMP' + currentId++
      } as ListEntity
  })
);

export const addedGiftSucceeded = createAction(
  '[Gift] added Gift item succeeded',
  props<{ tempId: string, payload: ListEntity }>()
);

export const addedGiftFailure = createAction(
  '[Gift] added Gift item failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const loadGiftData = createAction(
  '[Gift] load Gift data'
);

export const loadGiftDataSucceeded = createAction(
  '[Gift] loading Gift data succeeded',
  props<{ payload: ListEntity[] }>()
);

export const loadGiftDataFailed = createAction(
  '[Gift] loading Gift data failed',
  props<{ message: string }>()
);






