import { WlaPlace } from '@white-label-airline/models/place';
import {
  PlaceResponse,
  PlacesResponse,
} from '@white-label-airline/services/places';

const transformPlacesResponseToPlaces = (
  placesResponse: PlacesResponse
): WlaPlace[] => {
  return placesResponse.Places.map((placeReponse: PlaceResponse) => ({
    id: placeReponse.PlaceId,
    name: placeReponse.PlaceName,
  }));
};

export const placesDataTransform = { transformPlacesResponseToPlaces };
