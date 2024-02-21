import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';
import { GetFleabagQuoteService } from '../services/get-fleabag-quote.service';
import { QuoteComponent } from '../quote/quote.component';
import { DeckService } from '../services/deck.service';
import { MessageComponent } from '../message/message.component';

interface Card {
  image: string;
  isFlip: boolean;
  isPaired?: boolean;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TimerComponent, QuoteComponent, MessageComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  firstCard: Card | null = null;
  secondCard: Card | null = null;
  private subscriptions = new Subscription();

  private timerSubscription!: Subscription;
  juegoTerminado: boolean = false;
  isWin: boolean = false;

  constructor(
      public gameService: GameService,
      public deckService: DeckService,
      private quoteService: GetFleabagQuoteService
  ) { }

  ngOnInit() {
    this.initializeGame();
    this.timerSubscription = this.gameService.timerFinished$.subscribe(() => {
      this.juegoTerminado = true;
    });

    this.subscriptions.add(this.gameService.firstCard$.subscribe(card => {
      this.firstCard = card;
    }));

    this.subscriptions.add(this.gameService.secondCard$.subscribe(card => {
      this.secondCard = card;
    }));
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }

  initializeGame() {
    this.gameService.prepareGame();
  }

  cardAction(card: Card) {
    if(card.isFlip) return

    this.gameService.cardAction(card);
    this.quoteService.refreshQuote();
  } 
}
