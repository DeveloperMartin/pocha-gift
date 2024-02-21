import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';

interface WinMessage {
  message: string;
}

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  winnerMessage: string = ''

  private subscriptions = new Subscription();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.gameService.isWon$.subscribe(isWon => {
      if (isWon) {
        this.changeMessageWithTime(this.winMessages(), 1000);
      }
    }));
  }

  changeMessageWithTime(mensajes: WinMessage[], intervalo: number) {
    mensajes.forEach((mensaje, i) => {
      setTimeout(() => {
        this.winnerMessage = mensaje.message;
      }, intervalo * (i + 1));
    });
  }

  winMessages(): WinMessage[] {
    return [{
      message: 'Felicidades 🎉'
    }, {
      message: 'Ganaste 🤩'
    }, {
      message: 'Un premio 🎁'
    }, {
      message: '🥁'
    }, {
      message: '🥁🥁'
    }, {
      message: '🥁🥁🥁'
    }, {
      message: 'Una cena 🍴🍽️🍝'
    }, {
      message: 'Con el sacerdote 😏😏😏'
    }]
  }
}
