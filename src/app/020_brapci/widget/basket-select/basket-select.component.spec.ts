import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSelectComponent } from './basket-select.component';

describe('BasketSelectComponent', () => {
  let component: BasketSelectComponent;
  let fixture: ComponentFixture<BasketSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
