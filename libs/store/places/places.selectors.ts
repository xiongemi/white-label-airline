import { RootState } from '../root';

import { PlacesStateInterface } from './places-state.interface';

const getPlaces = (rootState: RootState): PlacesStateInterface =>
  rootState.places;

export const placesSelectors = { getPlaces };
