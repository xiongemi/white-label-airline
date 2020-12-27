import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import {
  WlaQuotesResponse,
  WlaPlacePerQuote,
  WlaQuoteResponse,
} from '@white-label-airline/services/quotes';

/**
 * Convert quotes response to quotes used by the app
 * @param quotesResponse response got from quotes
 * @param isOutbound whether is search for is outbound or not
 * @return { WlaQuotePerLeg[] }
 */
const transformQuotesResponseToQuotes = (
  quotesResponse: WlaQuotesResponse
): WlaQuotePerLeg[] => {
  const carriers = quotesResponse.Carriers;
  const places = quotesResponse.Places;
  return quotesResponse.Quotes.map(
    (quote: WlaQuoteResponse): WlaQuotePerLeg => {
      const leg = quote.OutboundLeg;
      return {
        id: quote.QuoteId,
        minPrice: quote.MinPrice,
        direct: quote.Direct,
        carriers: leg?.CarrierIds.map(
          (carrierId) =>
            carriers.find((carrier) => carrier.CarrierId === carrierId)?.Name
        ),
        origin: places.find(
          (place: WlaPlacePerQuote) => place.PlaceId === leg.OriginId
        ),
        destination: places.find(
          (place: WlaPlacePerQuote) => place.PlaceId === leg.DestinationId
        ),
      };
    }
  );
};

export const quotesDataTransfrom = { transformQuotesResponseToQuotes };
