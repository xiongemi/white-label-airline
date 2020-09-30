import { PlaceInterface } from '@white-label-airline/services/places';

export interface PlacesStateInterface {
  results: PlaceInterface[];
  query: string;
}
