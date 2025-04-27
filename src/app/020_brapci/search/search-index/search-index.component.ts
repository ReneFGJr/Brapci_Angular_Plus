import { Component, Input } from '@angular/core';
interface FilterItem {
  name: string;
  total: number;
}

@Component({
    standalone: false,
    selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrl: './search-index.component.scss',
})
export class SearchIndexComponent {
  @Input() filters: {
    keywords: FilterItem[];
    sources: FilterItem[];
    authors: FilterItem[];
    types: FilterItem[];
  } | null = null;

  constructor() {
    // Exemplo de inicialização (mock, apenas para teste)
  }
}
