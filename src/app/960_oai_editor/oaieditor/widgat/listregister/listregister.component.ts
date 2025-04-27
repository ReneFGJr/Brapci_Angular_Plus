import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-oai-listregister',
  templateUrl: './listregister.component.html',
})
export class ListregisterComponent implements OnChanges {
  @Input() public data: Array<any> | any;
  @Input() public registers: any[] = []; // Lista de registros
  @Output() messageEvent = new EventEmitter<string>();

  public id: string = ''; // ID selecionado

  goEditReg(id: string) {
    this.messageEvent.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      if (this.data && this.data.id_r) {
        this.id = this.data.id_r;
      }
    }

    if (changes['registers']) {
      console.log(
        'Registros alterados (registers):',
        changes['registers'].currentValue
      );
    }
  }
}
