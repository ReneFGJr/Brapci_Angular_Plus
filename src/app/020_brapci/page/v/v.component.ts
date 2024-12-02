import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrapciService } from './../../../010_service/brapci.service';

@Component({
  selector: 'app-v',
  templateUrl: './v.component.html',
  styleUrls: ['./v.component.scss'], // Corrigido `styleUrl` para `styleUrls`
})
export class VComponent implements OnInit, OnDestroy {
  id: string | null = null;
  data: any = null;
  header: any = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private brapciService: BrapciService
  ) {}

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
    const requestData: any = [];

    this.brapciService.api_post(url, requestData).subscribe(
      (res) => {
        this.data = res;
        this.setHeader(this.data);
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
        this.header = { title: 'Erro ao carregar dados' };
      }
    );
  }

  setHeader(data: any): void {
    if (data.publisher) {
      this.header = { title: data.publisher };
    } else if (data.name) {
      this.header = { title: data.name };
    } else {
      this.header = {
        title: `${data.title || 'Título não disponível'} | ${
          data.legend || ''
        } | ${data.year || ''}`,
        meta: data.meta || '',
      };
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
