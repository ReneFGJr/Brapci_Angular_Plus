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
  newBtn: boolean = false;
  saveBtn: boolean = false;
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
    console.log(id);
    this.term = id;
    this.saveBtn = true;
  }

  keyUp(event: KeyboardEvent) {
    if (!this.busy) {
      this.search = this.dataForm.value.term;

      if (event.key === 'Enter') {
        console.log('Enter foi pressionado!');
      }

      if (this.search.length > 2 || event.key === 'Enter') {
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
          this.busy = false;
          if (this.Concepts.length == 0) {
            this.newBtn = true;
          }
        });
      }
    }
  }
}
