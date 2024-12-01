import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWorksComponent } from './production-works.component';

describe('ProductionWorksComponent', () => {
  let component: ProductionWorksComponent;
  let fixture: ComponentFixture<ProductionWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductionWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
