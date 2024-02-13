import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private timerFinishedSource = new Subject<void>();

  // Observable que puede ser escuchado por otros componentes
  timerFinished$ = this.timerFinishedSource.asObservable();

  // Método para llamar cuando el temporizador finaliza
  notifyTimerFinished() {
    this.timerFinishedSource.next();
  }
}
