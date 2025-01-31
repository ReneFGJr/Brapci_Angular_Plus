import { BrapciService } from './../../../010_service/brapci.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  header: Array<any> | any;

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {
    this.header = { title: 'Entre em contato' };
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulário enviado:', this.contactForm.value);
      alert('Mensagem enviada com sucesso!');
      this.brapciService.api_post('contact', this.contactForm.value).subscribe((res) => {
        console.log('res:', res);
      });
      this.contactForm.reset();
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
