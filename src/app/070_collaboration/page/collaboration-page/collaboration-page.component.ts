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
  public header: Array<any> | any;
  contactForm!: FormGroup;
  suggestions: Author[] = [];
  isLoading = false;
  data: Array<any> | any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.header = { title: 'Redes de Colaboração' };
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      author: ['', Validators.required],
    });

    // Observa mudanças em 'author' e realiza busca
    this.authorCtrl.valueChanges
      .pipe(
        filter((value) => typeof value === 'string' && value.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.suggestions = [];
          this.data = []
          this.isLoading = true;
          console.log('Loading...');
        }),
        switchMap((value) =>
          this.http
            .get<{ results: Author[] }>(
              `https://cip.brapci.inf.br/api/sri/query_author?q=${encodeURIComponent(
                value
              )}`
            )
            .pipe(finalize(() => (
              this.isLoading = false
              )))
        )
      )
      .subscribe((response) => {
        console.log('Subscribe response:', response);
        this.data = response;
        this.suggestions = this.data;
      });
      console.log(this.suggestions);
  }

  get authorCtrl() {
    return this.contactForm.get('author')!;
  }

  // Quando o usuário clica em uma sugestão
  selectAuthor(author: Author) {
    this.contactForm.patchValue({ author: author.name });
    this.suggestions = [];
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const selectedAuthorName = this.contactForm.value.author;
      console.log('Autor selecionado:', selectedAuthorName);
      // aqui você pode enviar para seu back-end ou seguir outro fluxo
    }
  }
}
