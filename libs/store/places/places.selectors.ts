import { WlaRootState } from '../root';

import { PlacesStateInterface } from './models/places-state.interface';

const getPlaces = (rootState: WlaRootState): PlacesStateInterface =>
  rootState.places;

export const placesSelectors = { getPlaces };
