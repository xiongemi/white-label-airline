import { QuotePerLegInterface } from '@white-label-airline/services/quotes';
import React from 'react';

export interface QuoteProps {
  quote: QuotePerLegInterface;
  header: React.ReactNode;
  onQuoteClick?: (quote: QuotePerLegInterface) => void;
}
