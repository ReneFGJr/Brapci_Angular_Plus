import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter: number = 150000;
  public d0: string = '0';
  public d1: string = '0';
  public d2: string = '0';
  public d3: string = '0';
  public d4: string = '0';
  public d5: string = '0';
  public d6: string = '0';

  ngOnInit(): void {
    let dd = this.convertToPaddedString(this.counter)
    console.log(dd)
    this.d0 = dd[6]
    this.d1 = dd[5];
    this.d2 = dd[4];
    this.d3 = dd[3];
    this.d4 = dd[2];
    this.d5 = dd[1];
    this.d6 = dd[0];
    console.log("OK")

    //Add 'implements OnInit' to the class.

  }

  convertToPaddedString(num: number): string {
    return num.toString().padStart(7, '0');
  }
}
