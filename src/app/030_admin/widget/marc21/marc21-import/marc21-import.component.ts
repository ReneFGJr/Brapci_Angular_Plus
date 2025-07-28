import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marc21-import',
  standalone: false,
  templateUrl: './marc21-import.component.html',
  styleUrl: './marc21-import.component.scss',
})
export class Marc21ImportComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      tipo: [''],
      capitulo: [''],
      texto: [''],
    });
  }

  onSubmit() {
    console.log('Dados do formulário:', this.formulario.value);
  }
}
