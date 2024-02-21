import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}

  flipCard(card: Card): void {
    card.isFlip = !card.isFlip;
  }

  setPaired(card: Card): void {
    card.isPaired = true;
  }
}
