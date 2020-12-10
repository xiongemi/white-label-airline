import { WlaQuotePerLeg } from '@white-label-airline/services/quotes';
import React from 'react';

export interface QuoteProps {
  quote: WlaQuotePerLeg;
  header: React.ReactNode;
  onQuoteClick?: (quote: WlaQuotePerLeg) => void;
}
