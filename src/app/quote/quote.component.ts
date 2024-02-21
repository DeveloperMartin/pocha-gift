import { Component } from '@angular/core';
import { GetFleabagQuoteService } from '../services/get-fleabag-quote.service';
import { Subscription } from 'rxjs';

interface Quote {
  id: number;
  character: string;
  quote: string;
}

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  private subscriptions = new Subscription();
  quote: Quote = {
    id: 0,
    character: '',
    quote: ''
  }  

  constructor(private quoteService: GetFleabagQuoteService) {}

  ngOnInit() {
    this.quote = this.quoteService.currentQuote;

    this.subscriptions.add(this.quoteService.currentQuote$.subscribe(quote => {
      this.quote = quote;
    }));
  }

  

}
