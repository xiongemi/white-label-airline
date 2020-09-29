import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GetPlacesPayload {
  country: string;
  currency: string;
  query: string;
}

const initialState = {
  query: null,
  results: [],
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
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
