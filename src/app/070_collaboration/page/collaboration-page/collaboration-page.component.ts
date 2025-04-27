import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-collaboration-page',
  templateUrl: './collaboration-page.component.html',
  styleUrl: './collaboration-page.component.scss'
})
export class CollaborationPageComponent {
  contactForm: FormGroup;
  header: Array<any> | any;

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)//
    } else {
      console.error('Form is invalid');
    }
  }

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {
    this.header = { title: 'Entre em contato' };
    this.contactForm = this.fb.group({
      name1: ['', Validators.required],
      name2: ['', Validators.required],
    });
  }
}
