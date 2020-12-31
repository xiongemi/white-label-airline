import { Action } from '@reduxjs/toolkit';
import {
  countriesService,
  mockCountriesResponse,
} from '@white-label-airline/services/countries';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';

import { countriesDataTransform } from './countries.data-transform';
import { getCountriesEpic } from './countries.epics';
import { countriesSlice } from './countries.slice';

jest.mock('@white-label-airline/services/countries');

describe('Countries Epics', () => {
  describe('getCountriesEpic', () => {
    let action$: ActionsObservable<Action>;

    beforeEach(() => {
      action$ = new ActionsObservable(
        of(countriesSlice.actions.getCountries())
      );
    });

    it('should map to success action if service returns valid response', (done) => {
      countriesService.getCountries = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCountriesResponse));

      getCountriesEpic(action$).subscribe({
        next: (action) => {
          expect(countriesService.getCountries).toHaveBeenCalled();
          expect(action).toEqual(
            countriesSlice.actions.getCountriesSuccess(
              countriesDataTransform.transformCountriesResponseToCountries(
                mockCountriesResponse
              )
            )
          );
          done();
        },
      });
    });

    it('should map to error action if service throws an error', (done) => {
      const mockError = new Error('random error');
      countriesService.getCountries = jest
        .fn()
        .mockImplementation(() => Promise.reject(mockError));

      getCountriesEpic(action$).subscribe({
        next: (action) => {
          expect(action).toEqual(countriesSlice.actions.getCountriesError());
          done();
        },
      });
    });
  });
});
