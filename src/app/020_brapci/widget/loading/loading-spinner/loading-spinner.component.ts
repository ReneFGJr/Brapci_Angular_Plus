import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  @Input() message: string = 'Processando... Aguarde!';
}
