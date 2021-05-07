import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Quote } from '../models/quote.model';
import { QuotesData } from '../models/quotes-data.model';


@Injectable({
  providedIn: 'root',
})
export class QuoteGardenService {
  quote$;

  constructor(private httpClient: HttpClient) {
    this.quote$ = new BehaviorSubject<Quote | null>(null);
  }

  getRandomQuote(): void {
    this.httpClient.get<QuotesData>(`${environment.apiUrl}/quotes/random`)
      .pipe(
        map((quotesData) => {
          const { data } = quotesData;
          return data.map((quote) => {
            return {
              text: quote.quoteText,
              author: quote.quoteAuthor,
              genre: quote.quoteGenre,
            };
          });
        })
      )
      .subscribe((quotes) => this.quote$.next(quotes[0]));
  }

  getQuotesByAuthor(author: string): Observable<Quote[]> {
    return this.httpClient.get<QuotesData>(
        `${environment.apiUrl}/quotes?author=${author}&limit=10`)
      .pipe(
        map((quotesData) => {
          const { data } = quotesData;
          return data.map((quote) => {
            return {
              text: quote.quoteText,
              author: quote.quoteAuthor,
              genre: quote.quoteGenre,
            };
          });
        })
      );
  }
}
