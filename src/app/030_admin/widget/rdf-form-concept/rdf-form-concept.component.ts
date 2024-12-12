import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from './../../../010_service/brapci.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-form-concept',
  templateUrl: './rdf-form-concept.component.html',
  styleUrl: './rdf-form-concept.component.scss',
})
export class RdfFormConceptComponent {
  @Input() public field: Array<any> | any;
  @Input() public id: string = '';
  dataForm: FormGroup;
  public list = ['1','Rene','2','Viviane']

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
}
