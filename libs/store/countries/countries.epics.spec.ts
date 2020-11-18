import { Action } from '@reduxjs/toolkit';
import {
  countriesService,
  mockCountriesResponse,
} from '@white-label-airline/services/countries';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import '@white-label-airline/services/i18n/i18n.mock';

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

    test('should map to success action if service returns valid response', (done) => {
      countriesService.getCountries = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCountriesResponse));

      getCountriesEpic(action$).subscribe({
        next: (action) => {
          expect(countriesService.getCountries).toHaveBeenCalled();
          expect(action).toEqual(
            countriesSlice.actions.getCountriesSuccess(
              mockCountriesResponse.Countries
            )
          );
          done();
        },
      });
    });

    test('should map to error action if service throws an error', (done) => {
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
