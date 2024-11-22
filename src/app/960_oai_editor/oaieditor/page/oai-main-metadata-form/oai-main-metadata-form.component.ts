import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  @Output() messageEvent = new EventEmitter<string>();

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
      r_record: [0, Validators.required],
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
      let id = changes['idF'].currentValue;

      const url = `oaiserver/datarecord/${id}`;
      const dt: any = [];

      this.repositoryForm.patchValue({
        r_record: this.idR,
      });

      this.brapciService.api_post(url, dt).subscribe(
        (res) => {
          this.data = res;
          this.repositoryForm.patchValue({
            r_metadata: this.data.r_metadata,
            r_content: this.data.r_content,
            r_lang: this.data.r_lang,
            r_record: this.idR,
            id_r: this.data.id_r,
            id: this.data.id_r,
          });
        },
        (err) => {
          console.error('Erro ao carregar dados do repositório:', err);
        }
      );
    }
  }

  crnf() {
    let str = this.brapciService.removeCRLF(
      this.repositoryForm.value['r_content']
    );

    this.repositoryForm.patchValue({
      r_content: str,
    });
  }

  nbr_title() {
    let str = this.brapciService.nbr_title(
      this.repositoryForm.value['r_content']
    );

    this.repositoryForm.patchValue({
      r_content: str,
    });
  }

  cancel() {
    this.messageEvent.emit('0');
  }

  onSubmit() {
    const url = `oaiserver/updaterecord`;
    const dt: any = this.repositoryForm.value;
    console.log(dt)
    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.data = res;
        console.log("===========")
        console.log(this.data)
        this.messageEvent.emit('1');
      },
      (err) => {
        console.error('Erro ao carregar dados do repositório:', err);
      }
    );
  }
}
