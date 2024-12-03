import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Txt4netComponent } from './txt4net.component';

describe('Txt4netComponent', () => {
  let component: Txt4netComponent;
  let fixture: ComponentFixture<Txt4netComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Txt4netComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Txt4netComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
