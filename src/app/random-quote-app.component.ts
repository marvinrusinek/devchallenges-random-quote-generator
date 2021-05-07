import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { QuoteGardenService } from './random-quote/shared/services/quote-garden.service';

@Component({
  selector: 'app-root',
  templateUrl: './random-quote-app.component.html',
  styleUrls: ['./random-quote-app.component.scss']
})
export class RandomQuoteAppComponent {
  title = 'random-quote-generator-master';

  constructor(
    public quoteGardenService: QuoteGardenService,
    private router: Router
  ) {}

  randomQuote(): void {
    this.router.navigate(['../']).then();
    this.quoteGardenService.getRandomQuote();
  }
}
