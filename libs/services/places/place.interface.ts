export interface Place {
  PlaceId: string;
  PlaceName: string;
  CountryId: string;
  RegionId: string;
  CityId: string;
  CountryName: string;
}

export function getPlaceLabel(place: Place): string {
  return `${place.PlaceName} (${place.PlaceId})`;
}
