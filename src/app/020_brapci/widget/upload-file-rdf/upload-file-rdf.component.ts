import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-upload-file-rdf',
  templateUrl: './upload-file-rdf.component.html',
})
export class UploadFileRdfComponent {
  @Input() public toolsName: string = '';
  @Input() public toolsNameDescription: string = '';
  @Input() public buttonName: string = '';
  @Input() public endpoint: string = '';
  @Input() public action: string = '';
  @Input() public ID: string = '';

  emailSubmitted = false;
  constructor(private brapciService: BrapciService, private fb: FormBuilder) {}

  public dataset: Array<any> | any;
  public datasetR: Array<any> | any;
  public status = 0;

  // Método que recebe o dataset atualizado do componente filho
  updateDataset(newDataset: any[]) {
    this.dataset = newDataset; // Atualiza o dataset no pai
    this.status = 1;
    console.log(this.dataset);
    if (this.toolsName == 'bookCover') {
      this.processImage();
    }
    if (this.toolsName == 'facePhoto') {
      this.processImage();
    }
    if (this.toolsName == 'pdfFile') {
      this.processFilePDF();
    }
  }

  processFilePDF() {
    console.log('PDF FILE');
    let dt = {
      ID: this.ID,
      cover: this.dataset.dest,
      prop: this.toolsName,
    };
    let url = 'rdf/uploadFile';
    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.status = 0;
        console.log('RSP', res);
      },
      (error) => error
    );
  }

  processImage() {
    let dt = {
      ID: this.ID,
      cover: this.dataset.dest,
      prop: this.toolsName,
    };
    let url = 'rdf/uploadFile';
    this.brapciService.api_post(url, dt).subscribe(
      (res) => {
        this.status = 0;
        console.log('RSP', res);
      },
      (error) => error
    );
  }

  restart() {
    this.status = 0;
    this.dataset = null;
  }

  process() {
    this.datasetR = this.dataset;
    this.status = 2;

    this.brapciService.api_post(this.endpoint, this.dataset).subscribe(
      (res) => {
        this.status = 3;
      },
      (error) => error
    );
  }

  processed() {
    this.status = 3;
  }
}
