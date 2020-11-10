import React from 'react';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

export interface QuoteProps {
  quote: QuotePerLegInterface;
  header: React.ReactNode;
  onQuoteClick?: (quote: QuotePerLegInterface) => void;
}
