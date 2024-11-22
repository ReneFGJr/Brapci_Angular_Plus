import { BrapciService } from './../../../010_service/brapci.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-benancib',
  templateUrl: './benancib.component.html',
  styleUrl: './benancib.component.scss',
})
export class BenancibSearchComponent {
  searchForm: FormGroup;
  results: any[] = [];
  submitted = false;

  gtList = [
    { id: 1, name: 'GT 1 - Bibliometria' },
    { id: 2, name: 'GT 2 - Organização do Conhecimento' },
    // Adicione mais GTs conforme necessário
  ];
  typeList = ['Artigo', 'Resumo', 'Pôster'];

  constructor(private fb: FormBuilder, private BrapciService: BrapciService) {
    this.searchForm = this.fb.group({
      query: [''],
      gtNumber: [''],
      type: [''],
    });
  }

  ngOnInit(): void {}

  onSearch(): void {
    const filters = this.searchForm.value;
    this.BrapciService.api_post('/brapci/search/', filters).subscribe(
      (data: any) => {
        this.results = data;
      }
    );
  }
}
