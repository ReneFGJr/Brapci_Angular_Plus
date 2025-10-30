import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs';
import { BrapciService } from 'src/app/010_service/brapci.service';

interface Author {
  id: string;
  name: string;
  // adicione outros campos conforme resposta da API
}

@Component({
  standalone: false,
  selector: 'app-collaboration-page',
  templateUrl: './collaboration-page.component.html',
  styleUrl: './collaboration-page.component.scss',
})
export class CollaborationPageComponent {
  public header = { title: 'Redes de Colaboração' };
  contactForm!: FormGroup;
  data: any = null; // Para armazenar o resultado da API

  // Sugestões separadas para cada campo
  suggestionsAuthor: Author[] = [];
  suggestionsCoauthor: Author[] = [];
  isLoadingAuthor = false;
  isLoadingCoauthor = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private brapciService: BrapciService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      author: ['', Validators.required],
      coauthor: ['', Validators.required],
    });

    // Autocomplete para author
    this.authorCtrl.valueChanges
      .pipe(
        filter((v) => typeof v === 'string' && v.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.suggestionsAuthor = [];
          this.isLoadingAuthor = true;
        }),
        switchMap((value) =>
          this.http
            .get<Author[]>(
              `https://cip.brapci.inf.br/api/sri/query_author?q=${encodeURIComponent(
                value
              )}`
            )
            .pipe(finalize(() => (this.isLoadingAuthor = false)))
        )
      )
      .subscribe((results) => (this.suggestionsAuthor = results));

    // Autocomplete para coauthor
    this.coauthorCtrl.valueChanges
      .pipe(
        filter((v) => typeof v === 'string' && v.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.suggestionsCoauthor = [];
          this.isLoadingCoauthor = true;
        }),
        switchMap((value) =>
          this.http
            .get<Author[]>(
              `https://cip.brapci.inf.br/api/sri/query_author?q=${encodeURIComponent(
                value
              )}`
            )
            .pipe(finalize(() => (this.isLoadingCoauthor = false)))
        )
      )
      .subscribe((results) => (this.suggestionsCoauthor = results));
  }

  get authorCtrl() {
    return this.contactForm.get('author')!;
  }
  get coauthorCtrl() {
    return this.contactForm.get('coauthor')!;
  }

  selectAuthor(item: Author) {
    // limpa e define apenas o nome selecionado
    this.authorCtrl.setValue(item.name, { emitEvent: false });
    this.suggestionsAuthor = [];
  }

  selectCoauthor(item: Author) {
    this.coauthorCtrl.setValue(item.name, { emitEvent: false });
    this.suggestionsCoauthor = [];
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.data = null;

      const payload = {
        source: this.contactForm.value.author,
        target: this.contactForm.value.coauthor,
      };

      this.brapciService.api_post('tools/dijkstra', payload).subscribe({
        next: (res) => {
          this.data = res;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.data = { path: [] };
        },
      });
    }
  }

}
