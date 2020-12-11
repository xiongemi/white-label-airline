import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WlaPlace } from '@white-label-airline/services/places';

import { initialPlacesState } from './models/places-state.initial';
import { WlaPlacesState } from './models/places-state.interface';

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
      prepare(payload: GetPlacesPayload) {
        return { payload };
      },
    },
    getPlacesSuccess(state: WlaPlacesState, action: PayloadAction<WlaPlace[]>) {
      return { ...state, results: action.payload };
    },
  },
});
