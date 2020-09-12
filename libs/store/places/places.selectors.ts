import { Place } from '@white-label-airline/services/places';

import { RootState } from '../root';

const getPlaces = (rootState: RootState): Place[] => rootState.places;

export const placesSelectors = { getPlaces };
