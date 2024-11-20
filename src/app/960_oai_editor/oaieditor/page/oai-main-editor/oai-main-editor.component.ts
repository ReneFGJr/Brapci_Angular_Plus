import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from '../../../../010_service/brapci.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oai-main-editor',
  templateUrl: './oai-main-editor.component.html',
})
export class OaiMainEditorComponent {
  repositoryForm: FormGroup;
  msg: string = '';
  id: string | null = null; // Variável para armazenar o ID
  data: any;

  constructor(
    private fb: FormBuilder,
    private brapciService: BrapciService,
    private route: ActivatedRoute
  ) {
    this.repositoryForm = this.fb.group({
      id:[0],
      repositoryName: ['', Validators.required], // Campo obrigatório
      adminEmail: ['', [Validators.required, Validators.email]], // Email válido obrigatório
      identifier: ['', Validators.required], // Campo obrigatório
    });
  }

  ngOnInit(): void {
    // Captura o parâmetro da URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id && this.id !== '0') {
      // Para acompanhar alterações na URL (caso seja reusado)
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id');
        console.log('ID capturado:', this.id);
        this.loadRepositoryData(this.id ?? undefined);
      });
    } else {
      this.onLoading();
    }
  }

  onLoading(): void {
    this.repositoryForm.patchValue({
      identifier: 'oai:oaiserver.[name].brapci.inf.br:article/$ID',
      adminEmail: 'brapcici@gmail.com',
      id: 0
    });
  }

  loadRepositoryData(id: string=''): void {
    const url = `oaiserver/repository/${id}`;
    const dt: any = [];

    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.data = res;
        console.log('Dados carregados:', this.data);
        this.repositoryForm.patchValue({
          identifier: this.data[0].repositoryIdentifier,
          adminEmail: this.data[0].adminEmail,
          repositoryName: this.data[0].repositoryName,
          id: this.data[0].id_r,
        });
      },
      (err) => {
        console.error('Erro ao carregar dados do repositório:', err);
        this.msg = 'Erro ao carregar os dados do repositório.';
      }
    );
  }

  onSubmit(): void {
    const identifier = this.repositoryForm.value['identifier'];

    if (identifier.includes('[name]')) {
      this.msg =
        "Modifique no campo 'identifier' o valor de '[name]' para o nome de seu repositório.";
    } else {
      this.msg = '';
      if (this.repositoryForm.valid) {
        console.log('Formulário enviado:', this.repositoryForm.value);
        // Enviar para o serviço
        const payload = this.repositoryForm.value;
        const url =
          this.id === '0' ? 'oaiserver/create' : `oaiserver/update/${this.id}`;
        this.brapciService.api_post(url, payload).subscribe(
          (res) => {
            console.log('Resposta da API:', res);
            this.msg = 'Formulário enviado com sucesso!';
          },
          (err) => {
            console.error('Erro ao enviar formulário:', err);
            this.msg = 'Erro ao enviar o formulário. Tente novamente.';
          }
        );
      } else {
        console.log('Formulário inválido');
      }
    }
  }
}
