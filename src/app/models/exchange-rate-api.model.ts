import { CurrencyApi } from './currency-api.model';

export interface ExchangeRateApi {
  'Date': string;
  'PreviousDate': string;
  'PreviousURL': string;
  'Timestamp': string;
  'Valute': Record<string, CurrencyApi>;
}
