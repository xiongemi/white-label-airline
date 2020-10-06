import { QuotesResponseInterface } from './models/quotes-response.interface';
import { QuoteResponseInterface } from './models/quote-response.interface';
import { QuotePerLegInterface } from './models/quote-per-leg.interface';
import { PlacePerQuoteInterface } from './models/place-per-quote.interface';

/**
 * Convert quotes response to quotes used by the app
 * @param quotesResponse response got from quotes
 * @param isOutbound whether is search for is outbound or not
 * @return { QuotePerLegInterface[] }
 */
const transformQuotesResponseToQuotes = (
  quotesResponse: QuotesResponseInterface,
  isOutbound = true
): QuotePerLegInterface[] => {
  const carriers = quotesResponse.Carriers;
  const places = quotesResponse.Places;
  return quotesResponse.Quotes.map(
    (quote: QuoteResponseInterface): QuotePerLegInterface => {
      const leg = isOutbound ? quote.OutboundLeg : quote.InboundLeg;
      return {
        id: quote.QuoteId,
        minPrice: quote.MinPrice,
        direct: quote.Direct,
        carriers: leg.CarrierIds.map(
          (carrierId) =>
            carriers.find((carrier) => carrier.CarrierId === carrierId)?.Name
        ),
        origin: places.find(
          (place: PlacePerQuoteInterface) => place.PlaceId === leg.OriginId
        ),
        destination: places.find(
          (place: PlacePerQuoteInterface) => place.PlaceId === leg.DestinationId
        ),
      };
    }
  );
};

export const quotesDataTransfrom = { transformQuotesResponseToQuotes };
