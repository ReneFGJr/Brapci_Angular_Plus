import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
  selector: 'app-search-authority',
  templateUrl: './authority.component.html',
  styleUrl: './authority.component.scss',
})
export class AuthoritySearchComponent {
  public term: string = '';
  public searchForm: FormGroup | any;
  public results: Array<any> | any = [];
  public submitted:string = ''

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {}

  /************************************************************************  */
  createForm() {
    this.searchForm = this.fb.group({
      term: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();
  }

  /************************************************************************ FORM */

  onSearch() {
    if (this.searchForm.valid) {
      let dt = this.searchForm.value;
      let url = 'authority/search';
      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.results = res;
        console.log(this.results)
      })
    }
  }

  onKeyPress() {}
}
