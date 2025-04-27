import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrapciService } from 'src/app/010_service/brapci.service';

@Component({
    standalone: false,
    selector: 'app-search-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.scss'],
})
export class AuthoritySearchComponent {
  @Output() public results = new EventEmitter<any[]>();
  public term: string = '';
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private brapciService: BrapciService) {
    this.searchForm = this.fb.group({
      term: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSearch() {
    if (this.searchForm.valid) {
      const dt = this.searchForm.value;
      const url = 'authority/search';
      this.brapciService.api_post(url, dt).subscribe((res) => {
        this.results.emit(res);
      });
    }
  }

  onKeyPress() {
    // Exemplo: Chamar onSearch ao pressionar Enter
    if (this.searchForm.valid) {
      this.onSearch();
    }
  }
}
