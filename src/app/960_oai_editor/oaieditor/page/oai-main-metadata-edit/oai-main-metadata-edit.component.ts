import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { BrapciService } from '../../../../010_service/brapci.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oai-main-metadata-edit',
  templateUrl: './oai-main-metadata-edit.component.html',
})
export class OaiMainMetadataEditComponent implements OnChanges {
  @Input() public idR: string = '';
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

  // Executado quando o valor de @Input é alterado
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idR']) {
      console.log('ngOnChanges: ID alterado:', changes['idR'].currentValue);
      let id = changes['idR'].currentValue;

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
  }
}
