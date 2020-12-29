import { PayloadAction } from '@reduxjs/toolkit';
import { WlaPlace } from '@white-label-airline/models/place';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import {
  PlacesResponse,
  placesService,
} from '@white-label-airline/services/places';
import { equals } from 'ramda';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';

import { placesDataTransform } from './places.data-transform';
import { GetPlacesPayload, placesSlice } from './places.slice';

export const getPlacesEpic = (
  action$: ActionsObservable<PayloadAction<GetPlacesPayload>>
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
        map((response: PlacesResponse) =>
          placesDataTransform.transformPlacesResponseToPlaces(response)
        ),
        map((places: WlaPlace[]) =>
          placesSlice.actions.getPlacesSuccess(places)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const placesEpics: Epic[] = [getPlacesEpic];
