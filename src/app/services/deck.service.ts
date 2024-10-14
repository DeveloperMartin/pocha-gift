import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private cards: Card[] = [];

  constructor(private filesService: FilesService) {}

  getDeck(): Card[] {
    return this.cards;
  }

  prepareDeck(): void {
    this.filesService.getDeckFiles('/assets/deck/deck.json').subscribe((files: any) => {
      this.generateDeck(files.cards);
    });
  }

  private generateDeck(cards: Card[]): void {
    this.cards = cards;
    this.shuffleCards();
  }

  private shuffleCards(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
