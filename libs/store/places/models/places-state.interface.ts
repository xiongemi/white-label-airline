import { WlaPlace } from '@white-label-airline/models/place';

export interface WlaPlacesState {
  results: WlaPlace[];
  query: string;
}
