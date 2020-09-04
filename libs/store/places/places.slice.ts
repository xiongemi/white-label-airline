import { createSlice } from '@reduxjs/toolkit';

export interface GetPlacesPayload {
  country: string;
  currency: string;
  query: string;
}

export const placesSlice = createSlice({
  name: 'places',
  initialState: [],
  reducers: {
    getPlaces: {
      reducer() {
        return [];
      },
      prepare({ country, currency, query }: GetPlacesPayload) {
        return { payload: { country, currency, query } };
      },
    },
    getPlacesSuccess(_, action) {
      return action.payload;
    },
  },
});
