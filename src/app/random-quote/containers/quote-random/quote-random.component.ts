import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Quote } from '../../shared/models/quote.model';
import { QuoteGardenService } from '../../shared/services/quote-garden.service';

@Component({
  selector: 'app-quote-random',
  templateUrl: './quote-random.component.html',
  styleUrls: ['./quote-random.component.scss', '../../../random-quote-app.component.scss'],
})
export class QuoteRandomComponent implements OnInit, OnDestroy {
  quote: Quote = new Quote();
  destroy$ = new EventEmitter<boolean>();

  constructor(
    public quoteGardenService: QuoteGardenService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.quoteGardenService.quote$
      .pipe(takeUntil(this.destroy$))
        .subscribe((data: any) => {
          if (!data) {
            this.quoteGardenService.getRandomQuote();
          }
          this.quote = data;
        }
      );
  }

  getQuotesByAuthor(): void {
    this.router.navigate(['list', this.quote.author]).then();
  }

  ngOnDestroy(): void {
    this.destroy$.emit(true);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
