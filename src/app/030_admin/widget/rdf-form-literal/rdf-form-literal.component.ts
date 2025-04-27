import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-rdf-form-literal',
  templateUrl: './rdf-form-literal.component.html',
})
export class RdfFormLiteralComponent {
  @Input() public data: Array<any> | any
  @Input() public newReg: boolean = false
  @Output() winClose = new EventEmitter<string>();
  busy: boolean = false;

  editForm: FormGroup;

  constructor(private brapciService: BrapciService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      description: [
        '', // Valor inicial
        [Validators.required, Validators.minLength(1)], // Validações
      ],
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      // Define a URL com base em `newReg`
      const url = !this.newReg
        ? `rdf/updateLiteral/${this.data.id_n}`
        : `rdf/dataAddLiteral`;

      const dt = !this.newReg
        ? {
            q: this.editForm.value.description,
            prop: this.editForm.value.prop,
            ID: this.editForm.value.ID,
          }
        : {
            q: this.editForm.value.description,
            prop: this.data.property,
            ID: this.data.Data[0].ID,
          };

      this.brapciService.api_post(url, dt).subscribe({
        next: (res) => {
          this.onCancel();
        },
        error: (err) => {
          console.error('Error during search:', err);
        },
        complete: () => {
          this.busy = false;
        },
      });

    }
  }

  ngOnChanges(): void {
    // Simulação de dados carregados para edição
    this.editForm.patchValue({
      description: this.data.n_name,
      ID: this.data.ID,
      prop: this.data.c_class,
    });
  }

  /**
   * Handles cancel action
   */
  onCancel(): void {
    this.editForm.patchValue({ description: '' });
    this.winClose.emit('Close');
  }
}
