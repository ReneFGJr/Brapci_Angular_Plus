import { Component } from '@angular/core';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-monitor',
  templateUrl: './monitor.component.html'
})
export class MonitorComponent {
  result: string = '';
  data: Array<any> | any;
  public header: Array<any> | any;

  constructor(private brapciService: BrapciService)
  {
    this.header = { title: 'Monitoramento dos servidores' };
  }

  ngOnInit() {
    this.brapciService.api_post('tools/monitor').subscribe((res) => {
      this.data = res;
    });
  }
}
