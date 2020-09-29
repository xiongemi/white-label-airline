export interface PlaceInterface {
  PlaceId: string;
  PlaceName: string;
  CountryId: string;
  RegionId: string;
  CityId: string;
  CountryName: string;
}

export function getPlaceLabel(place: PlaceInterface): string {
  return `${place.PlaceName} (${place.PlaceId})`;
}
