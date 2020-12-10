import { WlaPlacePerQuote } from './models/place-per-quote.interface';
import { WlaQuotePerLeg } from './models/quote-per-leg.interface';
import { QuoteResponseInterface } from './models/quote-response.interface';
import { QuotesResponseInterface } from './models/quotes-response.interface';

/**
 * Convert quotes response to quotes used by the app
 * @param quotesResponse response got from quotes
 * @param isOutbound whether is search for is outbound or not
 * @return { WlaQuotePerLeg[] }
 */
const transformQuotesResponseToQuotes = (
  quotesResponse: QuotesResponseInterface
): WlaQuotePerLeg[] => {
  const carriers = quotesResponse.Carriers;
  const places = quotesResponse.Places;
  return quotesResponse.Quotes.map(
    (quote: QuoteResponseInterface): WlaQuotePerLeg => {
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
