import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FooterComponent } from "../../theme/footer/footer.component";

@Component({
  selector: 'app-search-boolean',
  templateUrl: './search-boolean.component.html',
  styleUrl: './search-boolean.component.scss',
})
export class SearchBooleanComponent {
  form: FormGroup;
  public header = { title: 'Busca Avançada - Base de Dados em Ciência da Informação' };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      terms: this.fb.array([]), // FormArray para armazenar os termos
    });
    this.addTerm(); // Adicionar o primeiro termo por padrão
  }

  // Getter para o FormArray
  get terms(): FormArray {
    return this.form.get('terms') as FormArray;
  }

  // Adicionar um novo termo
  addTerm() {
    const termGroup = this.fb.group({
      term: [''], // Campo para o termo
      operator: ['AND'], // Operador booleano padrão
    });
    this.terms.push(termGroup);
  }

  // Remover um termo pelo índice
  removeTerm(index: number) {
    this.terms.removeAt(index);
  }
}
