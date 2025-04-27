import { BrapciService } from 'src/app/010_service/brapci.service';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

declare var bootstrap: any;

@Component({
    standalone: false,
    selector: 'app-rdf-form-show',
  templateUrl: './rdf-form-show.component.html',
})
export class RdfFormShowComponent {
  @Output() private winUpdate = new EventEmitter<string>();
  title_action = 'Modificar conteúdo';
  private _data: {
    form: { [key: string]: { property: string; IDp: string; Data: any[] }[] };
  } = { form: {} };

  @Input()
  set data(value: {
    form: { [key: string]: { property: string; IDp: string; Data: any[] }[] };
  }) {
    if (value?.form) {
      this._data = value;
      this.groupsArray = Object.entries(this._data.form).map(
        ([key, value]) => ({
          key,
          value: value as { property: string; IDp: string; Data: any[] }[],
        })
      );
    }
  }

  get data() {
    return this._data;
  }

  @Input() public id: string = '';
  groupsArray: { key: string; value: any[] }[] = [];

  public showData: Array<any> | any;
  public field: Array<any> | any;
  public dataDelete: Array<any> | any;
  private modalInstance: any;
  public deleting: boolean = false;
  public newReg: boolean = false;
  public isImage: boolean = false;
  public ImageType: string = 'bookCover';

  public toolsName: string = 'Envio de imagem';
  public buttonName: string = 'Confirmar submissão';
  public api_endpoint: string = 'tools/upload';

  constructor(private brapciService: BrapciService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.deleting = false;
    if (changes['data'] && this.data?.form) {
      // Processa os dados apenas quando 'data' é atualizado
      this.groupsArray = Object.entries(this.data.form).map(([key, value]) => ({
        key,
        value: value as { property: string; IDp: string; Data: any[] }[],
      }));
    }
  }

  ngOnInit() {
    if (this.data?.form) {
      this.groupsArray = Object.entries(this.data.form).map(([key, value]) => ({
        key,
        value,
      }));
    }
  }

  openModal(modal: string, data: Array<any> = []) {
    this.dataDelete = data;
    const modalElement = document.getElementById(modal);
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
  }

  closeModal(modal: string) {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
    this.winUpdate.emit('Ok');
  }

  onUpdateData(ID: string) {
    alert('OK ' + ID);
  }

  onDeleteData(ID: string) {
    this.deleting = true;
    this.showData = 'Excluído dados ... aguarde ... id:' + ID;

    let url = 'rdf/delData/' + ID;
    this.brapciService.api_post(url).subscribe({
      next: (res) => {},
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
      },
    });

    if (this.modalInstance) {
      setTimeout(() => {
        this.closeModal('dataDeleteModal');
      }, 1000); // Delay de 1 segundo (1000ms)
    }
  }

  newDataLiteral(i: Array<any> | any) {
    if (!Array.isArray(i.ID)) {
      i.Data = [];
      i.Data.push({ ID: this.id });
    } else {
      console.log('ID já é array');
    }

    this.field = i;
    this.newReg = true;
    this.openModal('dataEditModal', i);
  }

  newImage(i: Array<any> | any, type:string) {
    console.log("TIPO:",type)
    if (!Array.isArray(i.ID)) {
      i.Data = [];
      i.Data.push({ ID: this.id });
    } else {
      console.log('ID já é array');
    }

    this.field = i;
    this.newReg = true;
    this.ImageType = type;
    this.openModal('imageModal', i);
  }

  newFile(i: Array<any> | any) {
    if (!Array.isArray(i.ID)) {
      i.Data = [];
      i.Data.push({ ID: this.id });
    } else {
      console.log('ID já é array');
    }

    this.field = i;
    this.newReg = true;
    this.openModal('fileModal', i);
  }

  editDataLiteral(i: Array<any> | any) {
    this.field = i;
    this.newReg = false;
    this.openModal('dataEditModal', i);
  }

  newData(i: Array<any> | any) {
    this.field = i;
    this.openModal('dataModal');
  }
}
