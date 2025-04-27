import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { BrapciService } from '../../../../010_service/brapci.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    standalone: false,
    selector: 'app-oai-main-metadata-edit',
  templateUrl: './oai-main-metadata-edit.component.html',
})
export class OaiMainMetadataEditComponent implements OnChanges {
  @Input() public idR: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  data: any;
  idF: string = '';
  repositoryForm: FormGroup;

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

  goEditar(id: string) {
    this.idF = id;
  }

  goRemove(id: string) {
    let rsp = confirm('Confirma Exclusão do dado?')
    if (rsp == true)
    {
      const url = `oaiserver/removerecords/${id}`;
      const dt: any = [];

      this.brapciService.api_post(url, dt).subscribe(
        (res) => {
          this.readData(this.idR);
        },
        (err) => {
          console.error('Erro ao carregar dados do repositório:', err);
        }
      );
    }
  }

  processForm(event: any) {
    if (event == '0') {
      this.idF = '';
    } else {
      this.idF = '';
      this.readData(this.idR);
    }
    // Log ou lógica adicional
  }

  readData(id: string) {
    const url = `oaiserver/datarecords/${id}`;
    const dt: any = [];

    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error('Erro ao carregar dados do repositório:', err);
      }
    );
  }

  // Executado quando o valor de @Input é alterado
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idR']) {
      let id = changes['idR'].currentValue;
      this.readData(id);
    }
  }
}
