import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vitrine-livros',
  templateUrl: './vitrine-livros.component.html',
  styleUrl: './vitrine-livros.component.scss'
})
export class VitrineLivrosComponent {
  @Input() public books:Array<any> | any
}
