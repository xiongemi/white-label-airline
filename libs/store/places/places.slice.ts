import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initialPlacesState } from './places-state-initial.const';

export interface GetPlacesPayload {
  country: string;
  currency: string;
  query: string;
}

export const placesSlice = createSlice({
  name: 'places',
  initialState: initialPlacesState,
  reducers: {
    getPlaces: {
      reducer(_, action: PayloadAction<GetPlacesPayload>) {
        return {
          query: action.payload.query,
          results: [],
        };
      },
      prepare({ country, currency, query }: GetPlacesPayload) {
        return { payload: { country, currency, query } };
      },
    },
    getPlacesSuccess(state, action) {
      return { ...state, results: action.payload };
    },
  },
});
