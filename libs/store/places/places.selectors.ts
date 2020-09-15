import { PlaceInterface } from '@white-label-airline/services/places';

import { RootState } from '../root';

const getPlaces = (rootState: RootState): PlaceInterface[] => rootState.places;

export const placesSelectors = { getPlaces };
