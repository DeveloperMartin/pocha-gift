import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit, OnDestroy {
  tiempoRestante: number = 20;
  intervalId: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante === 0) {
        this.stopTimer();
        this.gameService.notifyTimerFinished();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
