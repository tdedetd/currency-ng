import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { ExchangeRateApi } from '../models/exchange-rate-api.model';

@Injectable({ providedIn: 'root' })
export class CbrService {
  public exchangeRateByDate(date: Signal<Date>): HttpResourceRef<ExchangeRateApi | undefined> {
    return httpResource<ExchangeRateApi>(() => {
      const dateValue = date();
      const year = dateValue.getFullYear();
      const month = String(dateValue.getMonth() + 1).padStart(2, '0');
      const day = String(dateValue.getDate()).padStart(2, '0');
      return `https://www.cbr-xml-daily.ru/archive/${year}/${month}/${day}/daily_json.js`;
    });
  }
}
