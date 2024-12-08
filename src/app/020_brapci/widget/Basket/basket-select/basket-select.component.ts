import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/010_service/local-storage.service';
import { UserService } from 'src/app/010_service/user.service';

@Component({
  selector: 'app-basket-select',
  templateUrl: './basket-select.component.html'
})
export class BasketSelectComponent implements OnInit {
  @Input() public data: Array<any> = [];
  public basketValue: Array<any> = [];
  public total: number = 0;
  public total_result: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    console.log("==",this.data)
    this.total_result = this.data?.length || 0;
    this.basketValue = this.localStorageService.get('marked') || [];
    this.total = this.basketValue.length;
  }

  selectAll(): void {
    if (!this.data) return;

    this.basketValue = this.localStorageService.get('marked') || [];

    this.data.forEach((item) => {
      if (!this.basketValue.includes(item)) {
        this.basketValue.push(item);
      }
    });

    this.localStorageService.set('marked', this.basketValue);
    this.total = this.basketValue.length;
    this.total_result = 0;
  }

  clear(): void {
    this.basketValue = [];
    this.localStorageService.set('marked', this.basketValue);
    this.total = 0;
  }

  showSelected(): void {
    this.router.navigate(['basket/selected']);
  }
}
