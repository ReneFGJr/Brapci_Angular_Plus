import { BrapciService } from './../../../010_service/brapci.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public counter: number = 1500000; // Valor final do contador
  public data:Array<any> | any = []
  public d0: string = '0';
  public d1: string = '0';
  public d2: string = '0';
  public d3: string = '0';
  public d4: string = '0';
  public d5: string = '0';
  public d6: string = '0';

  private animationCounter: number = 0; // Valor inicial da animação

  constructor(private brapciService: BrapciService)
  {}

  ngOnInit(): void {
    let url = 'brapci/counter'
    this.brapciService.api_post(url).subscribe((res) => {
      this.data = res;
      this.counter = this.data.counter
      console.log(this.data)
    });
    this.animateCounter(); // Iniciar a animação ao carregar o componente
  }

  convertToPaddedString(num: number): string {
    return num.toString().padStart(7, '0');
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
        Math.ceil((this.counter - this.animationCounter) / 5) // Incremento proporcional
      );

      this.updateDigits(this.animationCounter); // Atualizar os dígitos
    }, 50); // Atualizar a cada 50ms (intervalo reduzido)
  }

  updateDigits(value: number): void {
    const digits = this.convertToPaddedString(value);

    // Atualizar os dígitos
    this.d0 = digits[6];
    this.d1 = digits[5];
    this.d2 = digits[4];
    this.d3 = digits[3];
    this.d4 = digits[2];
    this.d5 = digits[1];
    this.d6 = digits[0];
  }
}
