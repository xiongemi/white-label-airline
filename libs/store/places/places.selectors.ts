import { RootStateInterface } from '../root';

import { PlacesStateInterface } from './places-state.interface';

const getPlaces = (rootState: RootStateInterface): PlacesStateInterface =>
  rootState.places;

export const placesSelectors = { getPlaces };
