import { Component } from '@angular/core';
import { BrapciService } from '../../../../010_service/brapci.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-oai-main-metadata',
  templateUrl: './oai-main-metadata.component.html',
})
export class OaiMainMetadataComponent {
  repositoryForm: FormGroup;
  msg: string = '';
  id: string | null = null; // Variável para armazenar o ID
  idR: string = '';
  error: string = '';
  data: any;
  registers: any;

  constructor(
    private fb: FormBuilder,
    private brapciService: BrapciService,
    private route: ActivatedRoute
  ) {
    this.repositoryForm = this.fb.group({
      id: [0],
      repositoryName: ['', Validators.required], // Campo obrigatório
      adminEmail: ['', [Validators.required, Validators.email]], // Email válido obrigatório
      identifier: ['', Validators.required], // Campo obrigatório
    });
  }

  receiveRegisterID(message: string) {
    this.idR = message;
  }

  ngOnInit(): void {
    // Captura o parâmetro da URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id && this.id !== '0') {
      // Para acompanhar alterações na URL (caso seja reusado)
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id');
        this.loadRepositoryData(this.id ?? undefined);
      });
    } else {
    }
  }

  onSubmit() {
    alert("OI")
  }

  processForm(event: any) {
    // Log ou lógica adicional
  }

  loadRepositoryData(id: string = ''): void {
    const url = `oaiserver/repository/${id}`;
    const url2 = `oaiserver/listidentifiers/${id}`;
    const dt: any = [];

    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error('Erro ao carregar dados do repositório:', err);
        this.msg = 'Erro ao carregar os dados do repositório.';
      }
    );

    this.brapciService.api_post(url2, dt).subscribe(
      (res) => {
        this.registers = res;
      },
      (err) => {
        console.error('Erro ao carregar dados do repositório:', err);
        this.msg = 'Erro ao carregar os dados do repositório.';
      }
    );
  }
}
