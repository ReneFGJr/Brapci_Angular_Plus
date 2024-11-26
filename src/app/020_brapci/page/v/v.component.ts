import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrapciService } from './../../../010_service/brapci.service';

@Component({
  selector: 'app-v',
  templateUrl: './v.component.html',
  styleUrl: './v.component.scss',
})
export class VComponent {
  id: string | null = null; // Variável para armazenar o ID
  data: Array<any> | any;
  header: Array<any> | any;

  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService
  ) {}

  ngOnInit(): void {
    // Captura o parâmetro da URL
    this.id = this.route.snapshot.paramMap.get('id');

    // Para acompanhar alterações na URL (caso seja reusado)
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('ID capturado:', this.id);
      let url = `brapci/get/v1/` + this.id;
      let dt: Array<any> | any = [];

      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.data = res;
        this.header = {
          title:
            this.data.title +
            ' | ' +
            this.data.legend +
            ' | ' +
            this.data.year,
            meta:this.data.meta
        };
        console.log(this.header);
      });
    });
  }
}
