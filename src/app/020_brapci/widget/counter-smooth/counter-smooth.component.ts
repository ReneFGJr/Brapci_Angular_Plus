import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-smooth',
  templateUrl: './counter-smooth.component.html',
  styleUrl: './counter-smooth.component.scss',
})
export class CounterSmoothComponent {
  @Input() targetNumber: number = 0; // Número final do contador
  @Input() duration: number = 1000; // Duração da animação em milissegundos
  currentNumber: number = 0;

  ngOnInit() {
    this.startCounter();
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(
        this.targetNumber,
        changes['targetNumber'],
        changes['targetNumber']
      );

    if (this.targetNumber === null)
      {
        this.targetNumber = 0;
      }
      if (changes['targetNumber'] && !changes['targetNumber'].firstChange) {
        this.startCounter();
      }
  }

  startCounter() {
    const increment = this.targetNumber / (this.duration / 10); // Dividir a duração em incrementos de 10ms
    const interval = setInterval(() => {
      this.currentNumber += increment;
      if (this.currentNumber >= this.targetNumber) {
        this.currentNumber = this.targetNumber; // Garante o número exato
        clearInterval(interval); // Para a animação
      }
    }, 10);
  }
}
