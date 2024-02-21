import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DeckService } from './deck.service';
import { CardService } from './card.service';
import { Card } from '../models/card.model';
import { ConfettiService } from './confetti.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private timerFinishedSource = new Subject<void>();
  private firstCardSource = new BehaviorSubject<Card | null>(null);
  private secondCardSource = new BehaviorSubject<Card | null>(null);
  private blockSelectionSource = new BehaviorSubject<boolean>(false);
  private isWonSource = new BehaviorSubject<boolean>(false);

  firstCard$ = this.firstCardSource.asObservable();
  secondCard$ = this.secondCardSource.asObservable();
  blockSelection$ = this.blockSelectionSource.asObservable();
  isWon$ = this.isWonSource.asObservable();

  private firstCard: Card | null = null;
  private secondCard: Card | null = null;

  timerFinished$ = this.timerFinishedSource.asObservable();

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private confettiService: ConfettiService
  ) {}

  prepareGame() {
    this.deckService.prepareDeck();
  }

  cardAction(card: Card) {

    if (this.blockSelectionSource.value) return;

    this.cardService.flipCard(card);

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCardSource.next(this.firstCard);
    } else {

      this.blockSelectionSource.next(true);

      this.secondCard = card;
      this.secondCardSource.next(this.secondCard);
      this.validatePair(this.firstCard, this.secondCard);
      this.cleanCards();
    }
  }

  cleanCards() {
    this.firstCard = null;
    this.secondCard = null;
    this.firstCardSource.next(this.firstCard);
    this.secondCardSource.next(this.secondCard);
  }

  validatePair(card1: Card, card2: Card) {
    if (card1.image === card2.image) {
      this.cardService.setPaired(card1);
      this.cardService.setPaired(card2);
      this.cleanCards();
      this.blockSelectionSource.next(false);

      if (this.checkGameFinished(this.deckService.getDeck())) {
        this.confettiService.addConfetti();
        this.isWonSource.next(true);
      }
    } else {
      setTimeout(() => {
        this.cardService.flipCard(card1);
        this.cardService.flipCard(card2);
        this.cleanCards();
        this.blockSelectionSource.next(false);
      }, 1000);
    }
  }

  checkGameFinished(cards: Card[]): boolean {
    return cards.every((card) => card.isPaired);
  }

  notifyTimerFinished() {
    this.timerFinishedSource.next();
  }
}
