import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAnimateComponent } from './counter-animate.component';

describe('CounterAnimateComponent', () => {
  let component: CounterAnimateComponent;
  let fixture: ComponentFixture<CounterAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterAnimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
