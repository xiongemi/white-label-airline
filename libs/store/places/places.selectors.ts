import { WlaRootState } from '../root';

import { WlaPlacesState } from './models/places-state.interface';

const getPlaces = (rootState: WlaRootState): WlaPlacesState => rootState.places;

export const placesSelectors = { getPlaces };
