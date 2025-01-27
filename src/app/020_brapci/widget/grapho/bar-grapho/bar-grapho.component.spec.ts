import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphoComponent } from './bar-grapho.component';

describe('BarGraphoComponent', () => {
  let component: BarGraphoComponent;
  let fixture: ComponentFixture<BarGraphoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarGraphoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGraphoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
