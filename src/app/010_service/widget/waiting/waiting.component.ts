import { Component, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrl: './waiting.component.scss',
  standalone: false,
})
export class WaitingComponent {
  @Input() isLoading = true;
  secondsPassed = 0;
  private timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  ngOnChanges() {
    if (this.isLoading) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  private startTimer() {
    this.secondsPassed = 0;
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      this.secondsPassed++;
    });
  }

  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
