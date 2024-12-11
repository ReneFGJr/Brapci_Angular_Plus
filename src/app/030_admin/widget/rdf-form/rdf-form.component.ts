import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rdf-form',
  templateUrl: './rdf-form.component.html',
})
export class RdfFormComponent {
  @Input() public data: Array<any> | any;
  @Input() public field: Array<any> | any;
  @Input() public id: string = '';

  ngOnInit() {
    console.log('*****************');
    console.log('Data', this.data);
    console.log("Field",this.field);
    console.log('ID', this.id);
  }
}
