import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbbcComponent } from './ebbc.component';

describe('EbbcComponent', () => {
  let component: EbbcComponent;
  let fixture: ComponentFixture<EbbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
