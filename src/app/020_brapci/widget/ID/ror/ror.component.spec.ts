import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RORComponent } from './ror.component';

describe('RORComponent', () => {
  let component: RORComponent;
  let fixture: ComponentFixture<RORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RORComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
