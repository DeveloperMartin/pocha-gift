import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';
import { GetFleabagQuoteService } from '../services/get-fleabag-quote.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfettiService } from '../services/confetti.service';

interface Card {
  image: string;
  isFlip: boolean;
  isPaired?: boolean;
}

interface Quote {
  id: number;
  character: string;
  quote: string;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  cartas: Card[] = [];
  cartasVolteadas: Card[] = [];
  private timerSubscription!: Subscription;
  juegoTerminado: boolean = false;
  isWin: boolean = false;
  winnerMessage: string = ''

  quote: Quote = {
    id: 0,
    character: '',
    quote: ''
  
  };

  constructor(private gameService: GameService,
      private fleabagQuoteService: GetFleabagQuoteService,
      private confettiService: ConfettiService) { }

  ngOnInit() {
    this.initializeGame();
    this.timerSubscription = this.gameService.timerFinished$.subscribe(() => {
      this.juegoTerminado = true; // Mostrar el mensaje cuando el tiempo se agote
    });
  }

  ngOnDestroy() {
    // Asegurarse de desuscribirse para evitar fugas de memoria
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  initializeGame() {
    // Aquí debes inicializar tus cartas, por ejemplo, duplicando y barajando
    // Las imágenes deben estar en tu carpeta de activos
    this.cartas = [{
      image: 'assets/personajes/fleabag.jpeg',
      isFlip: false,
      isPaired: false
    }, {
      image: 'assets/personajes/Boo.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Claire.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Dad.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Demetriou.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Klare.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Martin.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Matrigna.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/The Priest.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/The Counsellor.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image: 'assets/personajes/fleabag.jpeg',
      isFlip: false,
      isPaired: false
    }, {
      image: 'assets/personajes/Boo.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Claire.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Dad.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Demetriou.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Klare.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Martin.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/Matrigna.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/The Priest.jpeg',
      isFlip: false,
      isPaired: false
    },{
      image:'assets/personajes/The Counsellor.jpeg',
      isFlip: false,
      isPaired: false
    }];
    this.shuffleCards();
  }

  shuffleCards() {
    // Aquí debes barajar tus cartas
    this.cartas = this.cartas.sort(() => Math.random() - 0.5);
  }

  flipCard(carta: Card) {
    this.quote = this.fleabagQuoteService.getQuote()
    if (this.cartasVolteadas.length < 2 && !carta.isFlip) {
      console.log(this.cartasVolteadas)
      this.cartasVolteadas.push(carta);
      this.toggleFlip(carta);
      if (this.cartasVolteadas.length === 2) {
        console.log('entro aca')
        this.checkPair();
      }
    }
  }

  toggleFlip(carta: Card) {
    carta.isFlip = !carta.isFlip;
  }

  checkPair() {
    if (this.cartasVolteadas[0].image === this.cartasVolteadas[1].image) {
      this.cartasVolteadas[0].isPaired = true;
      this.cartasVolteadas[1].isPaired = true;
      this.cartasVolteadas = [];
    } else {
      setTimeout(() => {
        console.log('entro')
        this.toggleFlip(this.cartasVolteadas[0]);
        this.toggleFlip(this.cartasVolteadas[1]);
        this.cartasVolteadas = [];
      }, 1000);
    }    

    if (this.isGameOver()) {
      this.isWin = true;
      this.juegoTerminado = true;

      this.confettiService.addConfetti();

      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }

      setTimeout(() => {
        this.winnerMessage = "Felicidades";
      }, 1000);

      setTimeout(() => {
        this.winnerMessage = "Ganaste";
      }, 2000);

      setTimeout(() => {
        this.winnerMessage = "🎉🎉🎉";
      }, 3000);

      setTimeout(() => {
        this.winnerMessage = "Parece que tenemos un problema";
      }, 4000);

      setTimeout(() => {
        this.winnerMessage = "Tu partida no se registro correctamente";
      }, 5000);

      setTimeout(() => {
        this.winnerMessage = "😔😔😔😔😔😔";
      }, 5800);

      setTimeout(() => {
        this.winnerMessage = "Pero no te preocupes";
      }, 6000);

      setTimeout(() => {
        this.winnerMessage = "Podes volver a intentarlo";
      }, 7000);

      setTimeout(() => {
        this.winnerMessage = "El proximo año";
      }, 8000);

      setTimeout(() => {
        this.winnerMessage = "🤩🤩🤩🤩🤩";
      }, 9000);

      setTimeout(() => {
        this.winnerMessage = "Mentira";
      }, 10000);

      setTimeout(() => {
        this.winnerMessage = "Te la creiste eh";
      }, 11000);

      setTimeout(() => {
        this.winnerMessage = "ja";
      }, 12000);

      setTimeout(() => {
        this.winnerMessage = "ja ja";
      }, 13000);

      setTimeout(() => {
        this.winnerMessage = "ja ja ja";
      }, 14000);

      setTimeout(() => {
        this.winnerMessage = "ja ja ja ja";
      }, 15000);

      setTimeout(() => {
        this.winnerMessage = "ja ja ja ja ja";
      }, 16000);

      setTimeout(() => {
        this.winnerMessage = "que divertido es hacer esto";
      }, 17000);

      setTimeout(() => {
        this.winnerMessage = "ahora si";
      }, 18000);

      setTimeout(() => {
        this.winnerMessage = "volviendo al punto inicial";
      }, 19000);

      setTimeout(() => {
        this.winnerMessage = "Perdiste!!!";
      }, 20000);

      setTimeout(() => {
        this.winnerMessage = "seguia";
      }, 21000);

      setTimeout(() => {
        this.winnerMessage = "ganaste algo";
      }, 22000);

      setTimeout(() => {
        this.winnerMessage = "algo que puede ser mejor que el juego";
      }, 23000);

      setTimeout(() => {
        this.winnerMessage = "de hecho ☝️🤓";
      }, 23000);

      setTimeout(() => {
        this.winnerMessage = "es algo que te gusta mucho";
      }, 24000);

      setTimeout(() => {
        this.winnerMessage = "que te hace feliz";
      }, 25000);

      setTimeout(() => {
        this.winnerMessage = "y que te hace sentir bien";
      }, 26000);

      setTimeout(() => {
        this.winnerMessage = "y produce endorfinas";
      }, 27000);

      setTimeout(() => {
        this.winnerMessage = "tantas endorfinas";
      }, 28000);

      setTimeout(() => {
        this.winnerMessage = "que te hace sentir como si estuvieras en una nube";
      }, 29000);

      setTimeout(() => {
        this.winnerMessage = "y que te hace olvidar de todo";
      }, 30000);

      setTimeout(() => {
        this.winnerMessage = "y que te hace sentir que todo esta bien";
      }, 31000);

      setTimeout(() => {
        this.winnerMessage = "y eso es";
      }, 32000);

      setTimeout(() => {
        this.winnerMessage = "mi amor por vos";
      }, 33000);

      setTimeout(() => {
        this.winnerMessage = "😍😍😍😍😍";
      }, 34000);

      setTimeout(() => {
        this.winnerMessage = "Te amo";
      }, 35000);

      setTimeout(() => {
        this.winnerMessage = "😘😘😘😘😘";
      }, 36000);

      setTimeout(() => {
        this.winnerMessage = "mentira de nuevo";
      }, 37000);

      setTimeout(() => {
        this.winnerMessage = "pero me caes bien";
      }, 38000);

      setTimeout(() => {
        this.winnerMessage = "conformate con eso";
      }, 39000);

      setTimeout(() => {
        this.winnerMessage = "mentira de nuevo";
      }, 40000);

      setTimeout(() => {
        this.winnerMessage = "no me caes bien";
      }, 41000);

      setTimeout(() => {
        this.winnerMessage = "me caes mal";
      }, 42000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu cara";
      }, 43000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu pelo";
      }, 44000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu ropa";
      }, 45000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu voz";
      }, 46000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu olor";
      }, 47000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu risa";
      }, 48000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu forma de caminar";
      }, 49000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu forma de hablar";
      }, 50000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu forma de mirar";
      }, 51000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu forma de respirar";
      }, 52000);

      setTimeout(() => {
        this.winnerMessage = "no me gusta tu forma de comer";
      }, 53000);

      setTimeout(() => {
        this.winnerMessage = "ja";
      }, 54000);

      setTimeout(() => {
        this.winnerMessage = "ja ja";
      }, 55000);

      setTimeout(() => {
        this.winnerMessage = "ja ja ja";
      }, 56000);

      setTimeout(() => {
        this.winnerMessage = "ja ja ja ja";
      }, 57000);

      setTimeout(() => {
        this.winnerMessage = "una vez mas";
      }, 58000);

      setTimeout(() => {
        this.winnerMessage = "Te menti!!!!";
      }, 59000);

      setTimeout(() => {
        this.winnerMessage = "😂😂😂😂😂";
      }, 60000);

      setTimeout(() => {
        this.winnerMessage = "era el mundo del revez!!!";
      }, 61000);

      setTimeout(() => {
        this.winnerMessage = "Y hablando de comer";
      }, 62000);

      setTimeout(() => {
        this.winnerMessage = "y hablando de tu premio";
      }, 63000 );

      setTimeout(() => {
        this.winnerMessage = "te ganaste, no solo mi amor";
      }, 64000);

      setTimeout(() => {
        this.winnerMessage = "sino que tambien";
      }, 65000);
      
      setTimeout(() => {
        this.winnerMessage = "🥁";
      }, 66000);

      setTimeout(() => {
        this.winnerMessage = "🥁🥁";
      }, 67000);

      setTimeout(() => {
        this.winnerMessage = "🥁🥁🥁";
      }, 68000);

      setTimeout(() => {
        this.winnerMessage = "🥁🥁🥁🥁";
      }, 69000);

      setTimeout(() => {
        this.winnerMessage = "🥁🥁🥁🥁🥁";
      }, 70000);

      setTimeout(() => {
        this.winnerMessage = "una cena conmigo";
      }, 71000);

      setTimeout(() => {
        this.winnerMessage = "hecha por mi";
      }, 72000);

      setTimeout(() => {
        this.winnerMessage = "con mucho amor";
      }, 73000);

      setTimeout(() => {
        this.winnerMessage = "Sabiendo que sos una persona ocupada";
      }, 74000);

      setTimeout(() => {
        this.winnerMessage = "la fecha es a convenir";
      }, 75000);

      setTimeout(() => {
        this.winnerMessage = "al igual que el horario";
      }, 76000);

      setTimeout(() => {
        this.winnerMessage = "y el lugar";
      }, 77000);

      setTimeout(() => {
        this.winnerMessage = "Mi casa 🏠";
      }, 78000);

      setTimeout(() => {
        this.winnerMessage = "Te espero";
      }, 79000);

      setTimeout(() => {
        this.winnerMessage = "😘😘😘😘😘";
      }, 80000);

    }
  }

  isGameOver() {
    return this.cartas.every(carta => carta.isPaired);
  }
}
