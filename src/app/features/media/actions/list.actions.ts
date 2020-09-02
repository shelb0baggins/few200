import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentId = 0;

export const addedMediaItem = createAction(
  '[media] media item added',
  ({ title, format, recommendedBy }: { title: string, format: string, recommendedBy: string }) => ({
    payload: {
      title, format, recommendedBy,
      id: 'TEMP' + currentId++
    } as ListEntity
  })
);

export const addedMediaItemSucceeded = createAction(
  '[media] media item added succeeded',
  props<{tempId: string, payload: ListEntity }>()
);
export const addedMediaIFailure = createAction(
  '[media] media item added failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const loadMediaData = createAction(
  '[media] media load data'
);

export const loadMediaDataSucceeded = createAction(
  '[media] media load data success',
  props<{payload: ListEntity[]}>()
);
export const loadMediaDataFailed = createAction(
  '[media] media load data failed',
  props<{message: string}>()
);
