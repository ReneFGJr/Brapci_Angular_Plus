import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from './../../../010_service/brapci.service';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-rdf-form-concept',
  templateUrl: './rdf-form-concept.component.html',
})
export class RdfFormConceptComponent {
  @Input() public field: any = {};
  @Input() public id: string = '';
  @Output() winClose = new EventEmitter<string>();

  dataForm: FormGroup;
  Concepts: Array<any> = [];
  ConceptsTypes: Array<any> = [];
  xData: Array<any> = [];
  busy: boolean = false;
  newBtn: boolean = false;
  saveBtn: boolean = false;
  search: string = '';
  term: string = '';

  constructor(private brapciService: BrapciService, private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      term: ['', [Validators.required, Validators.minLength(3)]],
      concept: [''],
      type: [''],
    });
  }

  /**
   * Lifecycle hook to handle changes in @Input properties
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.dataForm.patchValue({ term: '' });
    this.dataForm.patchValue({ Concepts: [] });
    this.Concepts = [];
    // Garante que `this.field?.Allow?.type` existe e é um array antes de processá-lo
    if (Array.isArray(this.field?.Allow?.type)) {
      // Mapeia os dados para usar Key e Value no select
      this.ConceptsTypes = this.field.Allow.type.map((it: any) => ({
        type: it.c_class, // Define a chave
      }));

      // Se houver apenas um item, já define no formControl 'type'
      if (this.ConceptsTypes.length === 1) {
        this.dataForm.patchValue({ type: this.ConceptsTypes[0].type });
      }
    } else {
      this.ConceptsTypes = [];
    }
  }

  /**
   * Handles form submission
   */
  onSubmit(): void {
    if (this.dataForm.valid) {
      //
    } else {
      console.error('Form is invalid');
    }
  }

  onSave() {
    const url = 'rdf/dataAdd';
    const dt = {
      source: this.id,
      prop: this.field.property,
      resource: this.term, // Safely access field properties
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

  onInclude() {
    let Term = this.dataForm.value.term;
    let Class = this.field.class;
    let Type = this.dataForm.value.type;
    let Property = this.field.property;
    let ID = this.id;
    console.log(Term, Class, Type, Property, ID);

    this.busy = true;

    const url = 'rdf/crtConceptAssociate';
    const dt = {
      term: this.dataForm.value.term,
      class: this.field.class,
      type: this.dataForm.value.type,
      property: this.field.property,
      ID: this.id,
    };

    this.brapciService.api_post(url, dt).subscribe({
      next: (res) => {
        this.xData = res
        console.log('RSP', this.xData);
        if (this.xData) {
          this.onCancel();
        } else {
          console.error('Error during search:', this.xData);
        }

      },
      error: (err) => {
        console.error('Error during search:', err);
      },
      complete: () => {
        this.busy = false;
      },
    });
  }

  /**
   * Handles cancel action
   */
  onCancel(): void {
    this.dataForm.patchValue({ term: '' });
    this.dataForm.patchValue({ Concepts: [] });
    this.Concepts = [];
    this.winClose.emit('Close');
  }

  /**
   * Sets the selected term and enables the save button
   */
  setTerm(id: string): void {
    this.term = id;
    this.saveBtn = true;
  }

  /**
   * Handles keyup event and performs search
   */
  keyUp(event: KeyboardEvent): void {
    if (this.busy) return;

    this.search = this.dataForm.value.term;

    if (this.search.length > 2 || event.key === 'Enter') {
      this.busy = true;

      const url = 'rdf/searchSelect';
      const dt = {
        q: this.search,
        ID: this.id,
        prop: this.field?.property || '', // Safely access field properties
      };

      this.brapciService.api_post(url, dt).subscribe({
        next: (res) => {
          this.Concepts = res || [];
          this.newBtn = this.Concepts.length === 0;
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
}
