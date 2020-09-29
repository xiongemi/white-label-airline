export interface Leg {
  CarrierIds: number[];
  OriginId: number;
  DestinationId: number;
  DepartureDate: string; // date in format like '2018-04-01T00:00:00'
}
