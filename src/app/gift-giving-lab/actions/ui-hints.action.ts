import { createAction, props } from '@ngrx/store';


export const giftFilterSet = createAction(
  '[gift] gift filter set',
  props<{ by: string }>()
);
