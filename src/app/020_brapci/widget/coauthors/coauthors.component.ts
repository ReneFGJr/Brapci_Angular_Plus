import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-coauthors',
  templateUrl: './coauthors.component.html',
  styleUrl: './coauthors.component.scss',
})
export class CoauthorsComponent {
  @Input() public coauthors: Array<any> | any;

  constructor(private router: Router) {}

  goView(id: string) {
    this.router.navigate(['/v', id]); // Navega para a rota especificada
  }
}
