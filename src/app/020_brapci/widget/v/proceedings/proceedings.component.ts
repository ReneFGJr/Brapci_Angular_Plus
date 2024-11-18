import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-proceedings',
  templateUrl: './proceedings.component.html',
})
export class ProceedingsComponent {
  @Input() public data:Array<any> | any
  public journal:number = 0

  ngOnInit()
    {
      console.log("=====");
      console.log(this.data)
      this.journal = this.data.Issue.jnl_rdf
    }
}
