import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as mediaActions from '../actions/list.actions';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaAppEffects {

  displayMediaAddError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mediaActions.addedMediaIFailure),
      map((a) => appActions.appFeatureError({errorMessage: a.errorMessage, featureName: 'Media'}))
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.appStarted),
      map(() => mediaActions.loadMediaData())
    )
  );
  constructor(private actions$: Actions) {

  }
}
