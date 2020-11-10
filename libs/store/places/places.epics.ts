import { PayloadAction } from '@reduxjs/toolkit';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import {
  PlacesResponseInterface,
  placesService,
} from '@white-label-airline/services/places';
import { equals } from 'ramda';
import {
  ActionsObservable,
  Epic,
  StateObservable,
  ofType,
} from 'redux-observable';
import { from, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';
import { RootStateInterface } from '../root/root-state.interface';

import { GetPlacesPayload, placesSlice } from './places.slice';

const getPlacesEpic: Epic = (
  action$: ActionsObservable<PayloadAction<GetPlacesPayload>>,
  states$: StateObservable<RootStateInterface>
) =>
  action$.pipe(
    ofType(placesSlice.actions.getPlaces.type),
    debounceTime(500),
    distinctUntilChanged(equals),
    switchMap((action: PayloadAction<GetPlacesPayload>) => {
      const { payload } = action as PayloadAction<GetPlacesPayload>;
      return from(
        placesService.getPlaces(
          payload.country,
          payload.currency,
          getCurrentLanguage(),
          payload.query
        )
      ).pipe(
        map((response: PlacesResponseInterface) =>
          placesSlice.actions.getPlacesSuccess(response.Places)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const placesEpics = [getPlacesEpic];
