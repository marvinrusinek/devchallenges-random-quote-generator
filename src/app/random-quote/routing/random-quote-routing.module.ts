import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteRandomComponent } from '../containers/quote-random/quote-random.component';
import { QuoteListComponent } from '../containers/quote-list/quote-list.component';

const routes: Routes = [
  { path: '', component: QuoteRandomComponent },
  { path: 'list/:author', component: QuoteListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomQuoteRoutingModule { }
