export interface WlaPlace {
  PlaceId: string;
  PlaceName: string;
  CountryId: string;
  RegionId: string;
  CityId: string;
  CountryName: string;
}

export function getPlaceLabel(place: WlaPlace): string {
  return `${place.PlaceName} (${place.PlaceId})`;
}
