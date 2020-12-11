import { WlaPlace } from '@white-label-airline/services/places';

export interface WlaPlacesState {
  results: WlaPlace[];
  query: string;
}
