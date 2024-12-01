import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBodyComponent } from './corporate-body.component';

describe('CorporateBodyComponent', () => {
  let component: CorporateBodyComponent;
  let fixture: ComponentFixture<CorporateBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
