import { Injectable } from '@angular/core';
import JSConfetti from 'js-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  private jsConfetti = new JSConfetti();

  constructor() {}

  addConfetti() {
    this.jsConfetti.addConfetti({
      emojis: ['🦆', '⚡️', '📙', '🧡', '💫', '🌸'],
      confettiRadius: 1,
      confettiNumber: 500,
    });
  }

  clearCanvas() {
    this.jsConfetti.clearCanvas();
  }
}
