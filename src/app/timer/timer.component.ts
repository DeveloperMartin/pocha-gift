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
  tiempoRestante: number = 60; // 60 segundos para el contador
  intervalId: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.iniciarTemporizador();
  }

  ngOnDestroy() {
    this.detenerTemporizador();
  }

  iniciarTemporizador() {
    this.intervalId = setInterval(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante === 0) {
        this.detenerTemporizador();
        this.gameService.notifyTimerFinished();
      }
    }, 1000);
  }

  detenerTemporizador() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
