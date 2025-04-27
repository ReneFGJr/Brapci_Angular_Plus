import { BrapciService } from './../../../../010_service/brapci.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var bootstrap: any;

@Component({
    standalone: false,
    selector: 'app-report-bug',
  templateUrl: './report-bug.component.html',
})
export class ReportBugComponent {
  @Input() public id: string = '';
  public bugIcone: string = '/assets/icone/bug.svg';
  public data: Array<any> | any;
  public requestData: Array<any> | any;
  private modalInstance: any;

  reportErrorForm: FormGroup;
  errors = [
    { label: 'PDF incorreto', controlName: 'pdfIncorrect' },
    { label: 'PDF inacessível', controlName: 'pdfInaccessible' },
    { label: 'Autores incorretos', controlName: 'incorrectAuthors' },
    { label: 'Palavras-chave incorretas', controlName: 'incorrectKeywords' },
    { label: 'Título incorreto', controlName: 'incorrectTitle' },
  ];

  constructor(private fb: FormBuilder, public brapciService: BrapciService) {
    this.reportErrorForm = this.fb.group({
      // Campos dinâmicos para os erros
      ...this.errors.reduce((acc: { [key: string]: any }, error) => {
        acc[error.controlName] = [false];
        return acc;
      }, {}),
      // Campo para "Outros"
      other: [false],
      otherDetails: [''],
    });

    this.requestData = new FormData();
  }

  onSubmit() {
    const selectedErrors = Object.entries(this.reportErrorForm.value)
      .filter(([key, value]) => key !== 'otherDetails' && value)
      .map(
        ([key]) =>
          key === 'other'
            ? `other: ${this.reportErrorForm.value.otherDetails}`
            : key // Retorna o nome da chave
      );

    const url = `brapci/bug`;
    this.requestData['id'] = this.id;
    this.requestData['bugs'] = JSON.stringify(selectedErrors);

    this.brapciService.api_post(url, this.requestData).subscribe({
      next: (res) => {
        this.data = res || {};
        console.log(this.data);
        this.closeModal('reportErrorModal');
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      },
    });
  }

  closeModal(modal: string) {
    const modalElement = document.getElementById(modal);
    if (modalElement) {
      this.modalInstance =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      this.modalInstance.hide();
    }
  }
}
