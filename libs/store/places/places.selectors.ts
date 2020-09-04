import { RootState } from '../root';
import { Place } from '@white-label-airline/services/places';

const getPlaces = (rootState: RootState): Place[] => rootState.places;

export const placesSelectors = { getPlaces };
