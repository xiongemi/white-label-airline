import { WlaPlace } from '@white-label-airline/services/places';

export interface PlacesStateInterface {
  results: WlaPlace[];
  query: string;
}
