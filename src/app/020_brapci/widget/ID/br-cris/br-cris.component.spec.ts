import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrCrisComponent } from './br-cris.component';

describe('BrCrisComponent', () => {
  let component: BrCrisComponent;
  let fixture: ComponentFixture<BrCrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrCrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrCrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
