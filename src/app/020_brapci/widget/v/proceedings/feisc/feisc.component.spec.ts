import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiscComponent } from './feisc.component';

describe('FeiscComponent', () => {
  let component: FeiscComponent;
  let fixture: ComponentFixture<FeiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeiscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
