import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-timeline-journal',
  templateUrl: './timeline-journal.component.html',
  styleUrl: './timeline-journal.component.scss',
})
export class TimelineJournalComponent {
  @Input() data: Array<any> | any;
}
