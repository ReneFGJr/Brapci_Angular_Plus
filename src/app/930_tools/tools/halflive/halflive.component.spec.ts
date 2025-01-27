import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfliveComponent } from './halflive.component';

describe('HalfliveComponent', () => {
  let component: HalfliveComponent;
  let fixture: ComponentFixture<HalfliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalfliveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
