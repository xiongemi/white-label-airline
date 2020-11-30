import { QuoteResponseInterface } from './quote-response.interface';

export const mockQuoteResponse: QuoteResponseInterface = {
  QuoteId: 1,
  MinPrice: 336,
  Direct: true,
  OutboundLeg: {
    CarrierIds: [1864],
    OriginId: 81727,
    DestinationId: 60987,
    DepartureDate: '2018-04-01T00:00:00',
  },
  InboundLeg: {
    CarrierIds: [851],
    OriginId: 60987,
    DestinationId: 81727,
    DepartureDate: '2018-05-01T00:00:00',
  },
  QuoteDateTime: '2018-03-08T04:54:00',
};
