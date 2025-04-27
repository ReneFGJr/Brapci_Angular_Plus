import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-v-corporate-body',
  templateUrl: './corporate-body.component.html',
  styleUrl: './corporate-body.component.scss',
})
export class CorporateBodyComponent {
  @Input() public data: Array<any> | any;
  persons: any[] = [];

  constructor(private router: Router) {}

  goView(id: string) {
    this.router.navigate(['/v', id]); // Navega para a rota especificada
  }

  ngOnInit(): void {
    // Filtrar e ordenar pessoas
    this.persons = this.getUniquePersons(
      this.data.data.filter((item: any) => item.Class === 'Person')
    );
  }

  getUniquePersons(persons: Array<any>): Array<any> {
    // Usa um Set para garantir unicidade pelo campo Caption
    const seen = new Set();
    return persons
      .filter((person) => {
        const isDuplicate = seen.has(person.Caption);
        seen.add(person.Caption);
        return !isDuplicate;
      })
      .sort((a: any, b: any) =>
        a.Caption.localeCompare(b.Caption, 'pt', { sensitivity: 'base' })
      );
  }
}
