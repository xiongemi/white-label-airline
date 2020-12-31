import { PayloadAction } from '@reduxjs/toolkit';
import {
  placesService,
  mockPlacesResponse,
} from '@white-label-airline/services/places';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';

import { errorSlice } from '../error/error.slice';

import { placesDataTransform } from './places.data-transform';
import { getPlacesEpic } from './places.epics';
import { GetPlacesPayload, placesSlice } from './places.slice';

jest.mock('@white-label-airline/services/places');

describe('Currencies Epics', () => {
  describe('getPlacesEpic', () => {
    let action$: ActionsObservable<PayloadAction<GetPlacesPayload>>;

    beforeEach(() => {
      action$ = new ActionsObservable(
        of(
          placesSlice.actions.getPlaces({
            query: 'toronto',
            country: 'CA',
            currency: 'CA',
          })
        )
      );
    });

    it('should map to success action if service returns valid response', (done) => {
      placesService.getPlaces = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockPlacesResponse));

      getPlacesEpic(action$).subscribe({
        next: (action) => {
          expect(placesService.getPlaces).toHaveBeenCalled();
          expect(action).toEqual(
            placesSlice.actions.getPlacesSuccess(
              placesDataTransform.transformPlacesResponseToPlaces(
                mockPlacesResponse
              )
            )
          );
          done();
        },
      });
    });

    it('should map to success action if service returns valid response', (done) => {
      const mockError = new Error('random error');
      placesService.getPlaces = jest
        .fn()
        .mockImplementation(() => Promise.reject(mockError));

      getPlacesEpic(action$).subscribe({
        next: (action) => {
          expect(action).toEqual(errorSlice.actions.handleError(mockError));
          done();
        },
      });
    });
  });
});
