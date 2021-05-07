import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RandomQuoteRoutingModule } from './random-quote/routing/random-quote-routing.module';
import { RandomQuoteAppComponent } from './random-quote-app.component';
import { QuoteListComponent } from './random-quote/containers/quote-list/quote-list.component';
import { QuoteRandomComponent } from './random-quote/containers/quote-random/quote-random.component';
import { FooterComponent } from './random-quote/containers/footer/footer.component';
import { QuoteGardenService } from './random-quote/shared/services/quote-garden.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'random-quote',
    pathMatch: 'full'
  },
  {
    path: 'random-quote',
    loadChildren: () =>
      import('./random-quote/routing/random-quote-routing.module').then(m => m.RandomQuoteRoutingModule)
  }
];

@NgModule({
  declarations: [
    RandomQuoteAppComponent,
    FooterComponent,
    QuoteListComponent,
    QuoteRandomComponent
  ],
  imports: [
    BrowserModule,
    RandomQuoteRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [QuoteGardenService],
  bootstrap: [RandomQuoteAppComponent]
})
export class RandomQuoteAppModule { }
