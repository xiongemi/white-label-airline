import { RootStateInterface } from '../root';

import { PlacesStateInterface } from './models/places-state.interface';

const getPlaces = (rootState: RootStateInterface): PlacesStateInterface =>
  rootState.places;

export const placesSelectors = { getPlaces };
