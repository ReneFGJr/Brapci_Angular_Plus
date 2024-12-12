import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from './../../../010_service/brapci.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-form-concept',
  templateUrl: './rdf-form-concept.component.html',
  styleUrl: './rdf-form-concept.component.scss',
})
export class RdfFormConceptComponent {
  @Input() public field: any = {};
  @Input() public id: string = '';
  dataForm: FormGroup;
  Concepts: Array<any> = [];
  busy: boolean = false;
  search: string = '';
  term: string = '';

  constructor(private brapciService: BrapciService, private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      term: ['', [Validators.required, Validators.minLength(3)]],
      concept: [''],
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      console.log('Form Data:', this.dataForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  setTerm(id: string) {
    this.term = id;
  }

  keyUp() {
    console.log(this.busy);
    if (!this.busy) {
      this.search = this.dataForm.value.term;
      console.log('==>' + this.search.length);
      if (this.search.length > 2) {
        this.busy = true;
        console.log('=LOG=>' + this.search);
        let url = 'rdf/searchSelect';
        const dt = {
          q: this.search,
          ID: this.id,
          prop: this.field?.property || '', // Safely access field properties
        };
        this.brapciService.api_post(url, dt).subscribe((res) => {
          this.Concepts = res;
          this.Concepts = this.Concepts;
          console.log('+===================');
          console.log(this.Concepts);
          this.busy = false;
        });
      }
    }
  }
}
