import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-counter-animate',
  templateUrl: './counter-animate.component.html',
  styleUrl: './counter-animate.component.scss',
})
export class CounterAnimateComponent {
  @Input() counter: number = 1500000; // Valor final do contador
  @Input() digits: number = 1500000; // Valor final do contador

  public d:Array<any> | any = [0,0,0,0,0,0,0]

  private animationCounter: number = 0; // Valor inicial da animação

  convertToPaddedString(num: number): string {
    return num.toString().padStart(7, '0');
  }
  ngOnInit() {
    this.animateCounter(); // Iniciar a animação ao carregar o componente
  }

  animateCounter(): void {
    const interval = setInterval(() => {
      if (this.animationCounter >= this.counter) {
        clearInterval(interval); // Parar a animação quando atingir o valor final
        this.updateDigits(this.counter); // Garantir que o valor final seja exibido corretamente
        return;
      }

      // Incrementar mais rapidamente (ajuste este valor para controlar a velocidade)
      this.animationCounter += Math.max(
        1000, // Incremento mínimo
        Math.ceil((this.counter - this.animationCounter) / 3) // Incremento proporcional
      );

      this.updateDigits(this.animationCounter); // Atualizar os dígitos
    }, 50); // Atualizar a cada 50ms (intervalo reduzido)
  }

  updateDigits(value: number): void {
    const digits = this.convertToPaddedString(value);

    // Atualizar os dígitos
    this.d[0] = digits[0];
    this.d[1] = digits[1];
    this.d[2] = digits[2];
    this.d[3] = digits[3];
    this.d[4] = digits[4];
    this.d[5] = digits[5];
    this.d[6] = digits[6];
  }
}
