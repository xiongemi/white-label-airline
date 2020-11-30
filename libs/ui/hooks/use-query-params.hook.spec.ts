import { renderHook } from '@testing-library/react-hooks';
import { TripTypeEnum } from '@white-label-airline/store';

import { searchFormDataTransform } from '../search-form/search-form.data-transform';

import { useQueryParamsAsSearchForm } from './use-query-params.hook';

jest.mock('react-router-dom', () => ({
  useLocation: () => {
    return {
      search:
        'country=CA&currency=CAD&from=YTOA-sky&to=NYCA-sky&departDate=2020-11-30&tripType=search.roundTrip&returnDate=2020-12-05',
    };
  },
}));

describe('Use Query Params Hook', () => {
  test('should parse query params', () => {
    const { result } = renderHook(() => useQueryParamsAsSearchForm());

    expect(result.current.queryParams).toEqual({
      country: 'CA',
      currency: 'CAD',
      departDate: '2020-11-30',
      from: 'YTOA-sky',
      returnDate: '2020-12-05',
      to: 'NYCA-sky',
      tripType: TripTypeEnum.RoundTrip,
    });
    expect(result.current.searchForm).toEqual({
      country: { Code: 'CA' },
      currency: { Code: 'CAD' },
      departDate: searchFormDataTransform.parseQueryParamsDate('2020-11-30'),
      from: { PlaceId: 'YTOA-sky' },
      returnDate: searchFormDataTransform.parseQueryParamsDate('2020-12-05'),
      to: { PlaceId: 'NYCA-sky' },
      tripType: TripTypeEnum.RoundTrip,
    });
  });
});
