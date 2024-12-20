import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrapciService } from 'src/app/010_service/brapci.service';


@Component({
  selector: 'app-v',
  templateUrl: './v.component.html',
  styleUrls: ['./v.component.scss'],
})
export class VComponent implements OnInit, OnDestroy {
  id: string | null = null;
  data: any = null;
  header: Array<any> | any
  private subscription: Subscription = new Subscription();

  constructor(
    private brapciService: BrapciService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    // Escuta mudanças na URL e atualiza o ID
    this.subscription.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
        if (this.id) {
          this.fetchData(this.id);
        }
      })
    );
  }

  fetchData(id: string): void {
    const url = `brapci/get/v1/${id}`;
    const requestData = {};

    this.brapciService.api_post(url, requestData).subscribe({
      next: (res) => {
        this.data = res || {};
        console.log(this.data)
        this.setHeader(this.data);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
        this.header = { title: 'Erro ao carregar dados' };
      },
    });
  }

  setHeader(data: any): void {
    console.log("DATA")
    console.log(data)

    let title = data.title
    let legend = data.legend
    let year = data.year
    let meta = data.meta

    if (this.data.Class == 'Journals') {
      this.header = {
        title: this.data.publisher,
        meta: meta || '',
      };
    } else if (this.data.Class == 'Canceled') {
      this.header = {
        title: 'Item cancelado',
        meta: meta || '',
      };
    } else if (this.data.Class == 'Person') {
      this.header = {
        title: this.data.name,
        meta: meta || '',
      };
    } else {
      this.header = {
        title: `${title || 'Título não disponível'} | ${legend || ''} | ${
          year || ''
        }`,
        meta: meta || '',
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
