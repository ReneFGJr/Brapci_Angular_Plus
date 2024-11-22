import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrapciComponent } from './brapci.component';

describe('BrapciComponent', () => {
  let component: BrapciComponent;
  let fixture: ComponentFixture<BrapciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrapciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrapciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
