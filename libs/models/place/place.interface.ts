export interface WlaPlace {
  id: string;
  name: string;
}

export function getPlaceLabel(place: WlaPlace): string {
  return `${place.name} (${place.id})`;
}
