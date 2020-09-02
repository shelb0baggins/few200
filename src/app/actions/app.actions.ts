import { createAction, props } from "@ngrx/store";

export const appStarted = createAction(
  '[app] APP STARTED'
);

export const appFeatureError = createAction(
  '[app] application error',
  props<{ errorMessage: string, featureName: string }>()
);

export const clearAppFeatureError = createAction(
  '[app] clear app feature error'
);
