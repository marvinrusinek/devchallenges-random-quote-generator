import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Quote } from '../../shared/models/quote.model';
import { QuoteGardenService } from '../../shared/services/quote-garden.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss', '../../../random-quote-app.component.scss']
})
export class QuoteListComponent {
  quotes$: Observable<Quote[]>;
  quoteAuthor = '';

  constructor(
    private route: ActivatedRoute,
    private quoteGardenService: QuoteGardenService
  ) {
    this.quotes$ = this.quoteGardenService.getQuotesByAuthor(this.quoteAuthor);

    this.route.params.subscribe((params) => {
      this.quoteAuthor = params.author;
      this.quotes$ = this.quoteGardenService.getQuotesByAuthor(this.quoteAuthor);
    });
  }
}
