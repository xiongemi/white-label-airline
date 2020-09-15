export interface CurrencyInterface {
  Code: string;
  Symbol: string;
  ThousandsSeparator: string;
  DecimalSeparator: string;
  SymbolOnLeft: boolean;
  SpaceBetweenAmountAndSymbol: boolean;
  RoundingCoefficient: number;
  DecimalDigits: number;
}
