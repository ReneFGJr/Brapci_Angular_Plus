import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSitiComponent } from './banner-siti.component';

describe('BannerSitiComponent', () => {
  let component: BannerSitiComponent;
  let fixture: ComponentFixture<BannerSitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerSitiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
