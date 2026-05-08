import { Component, computed, inject, Signal, signal } from '@angular/core';
import { CbrService } from '../../services/cbr.service';
import { IsBrowserToken } from '../../tokens/is-browser.token';
import { CurrencyApi } from '../../models/currency-api.model';

@Component({
  selector: 'app-current-rate',
  imports: [],
  templateUrl: './current-rate.html',
  styleUrl: './current-rate.scss',
})
export class CurrentRate {
  private cbrService = inject(CbrService);
  private isBrowser = inject(IsBrowserToken);

  protected currencies: Signal<CurrencyApi[]>;

  constructor() {
    const date = signal(new Date());
    const currenciesResponse = this.isBrowser ? this.cbrService.exchangeRateByDate(date).value : signal(undefined);

    this.currencies = computed(() => {
      const currenciesResponseValue = currenciesResponse();
      return currenciesResponseValue ? Object.values(currenciesResponseValue.Valute) : [];
    });
  }
}
