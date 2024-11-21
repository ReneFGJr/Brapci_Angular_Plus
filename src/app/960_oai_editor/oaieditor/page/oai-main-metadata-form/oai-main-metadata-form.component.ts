import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from '../../../../010_service/brapci.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oai-main-metadata-form',
  templateUrl: './oai-main-metadata-form.component.html',
})
export class OaiMainMetadataFormComponent {
  @Input() public idF: string = '';
  @Input() public idR: string = '';
  data: any;
  metadata: any;
  repositoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private brapciService: BrapciService,
    private route: ActivatedRoute
  ) {
    this.repositoryForm = this.fb.group({
      id: [0],
      r_metadata: ['', Validators.required], // Campo obrigatório
      r_content: ['', Validators.required], // Campo obrigatório
      r_lang: ['', Validators.required], // Campo obrigatório
      id_r: [0], // Campo obrigatório
    });
  }

  ngOnInit() {
    // **************************** Campos de Metadados
    const url = `oaiserver/metadata`;
    const dt: any = [];

    this.brapciService.api_post(url, dt).subscribe((res) => {
      this.metadata = res;
    });
  }

  goEditar(id: string) {
    this.idF = id;
  }

  // Executado quando o valor de @Input é alterado
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idF']) {
      console.log('FORM==>', changes['idF'].currentValue);
      let id = changes['idF'].currentValue;

      const url = `oaiserver/datarecord/${id}`;
      const dt: any = [];

      this.brapciService.api_post(url, dt).subscribe(
        (res) => {
          this.data = res;
          console.log(res)
          this.repositoryForm.patchValue({
            r_metadata: this.data.r_metadata,
            r_content: this.data.r_content,
            r_lang: this.data.r_lang,
            id_r: this.data.id_r,
          });
        },
        (err) => {
          console.error('Erro ao carregar dados do repositório:', err);
        }
      );
    }
  }

  onSubmit() {
    console.log(this.repositoryForm.value);
      const url = `oaiserver/updaterecord`;
      const dt: any = this.repositoryForm.value;
      this.brapciService.api_post(url, dt).subscribe(
        (res) => {
          this.data = res;
          console.log(res);
          this.repositoryForm.patchValue({
            r_metadata: this.data.r_metadata,
            r_content: this.data.r_content,
            r_lang: this.data.r_lang,
            id: this.data.id_r,
          });
        },
        (err) => {
          console.error('Erro ao carregar dados do repositório:', err);
        }
      );
  }
}
