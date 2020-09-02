import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/list.actions';
import { environment } from '../../../environments/environments';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';
import { of } from 'rxjs';


@Injectable()

export class ListEffects {

removeItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.removedMediaItem),
    switchMap((item) => this.client.delete(environment.apiUrl + `media/${item.payload.id}`)
    .pipe(
      filter(() => false),
      map(() => ({type: 'noop'})),
      catchError((e) => of(actions.addedMediaIFailure({payload: item.payload, errorMessage: `Failed to delete ${item.payload.title}`})))
    ))
  ), {dispatch: false});

  addItem$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.addedMediaItem),
    switchMap((originalAction) => this.client.post<ListEntity>(environment.apiUrl + 'media', {
      title: originalAction.payload.title,
      format: originalAction.payload.format,
      recommendedBy: originalAction.payload.recommendedBy
    }).pipe(
      map(payload => actions.addedMediaItemSucceeded({payload, tempId: originalAction.payload.id})),
      catchError(() => of(actions.addedMediaIFailure({payload: originalAction.payload, errorMessage: `Could not Add ${originalAction.payload.title}`})))
    ))), {dispatch: true}
  );
    // When we get a loadListData -> go to the API -> (loadListDataSucceeded | loadListDataFailed)
  loadData$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.loadMediaData),
    switchMap(() => this.client.get<{ data: ListEntity[] }>(environment.apiUrl + 'media')
      .pipe(
        map(response => actions.loadMediaDataSucceeded({ payload: response.data })),
        catchError(() => of(actions.loadMediaDataFailed({ message: 'Something went wrong with the API. Bummer' })))
      )
    )
  )
);


  constructor(private actions$: Actions, private client: HttpClient){}
}

