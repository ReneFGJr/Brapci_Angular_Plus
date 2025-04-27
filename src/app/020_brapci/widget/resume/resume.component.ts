import { BrapciService } from './../../../010_service/brapci.service';
import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  constructor(private brapciService: BrapciService) { }
  data: any;
  ngOnInit() {
      let url = 'brapci/statistics';
      this.brapciService.api_post(url).subscribe((res) => {
        this.data = res;
        console.log(this.data);
      })
    }
}
