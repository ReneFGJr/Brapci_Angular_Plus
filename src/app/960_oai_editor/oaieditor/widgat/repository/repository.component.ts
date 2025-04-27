import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-repository-view',
  templateUrl: './repository.component.html'
})
export class RepositoryComponent {
  @Input() public data:Array<any> | any

}
