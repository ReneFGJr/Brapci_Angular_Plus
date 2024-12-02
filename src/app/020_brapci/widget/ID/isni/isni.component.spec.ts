import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISNIComponent } from './isni.component';

describe('ISNIComponent', () => {
  let component: ISNIComponent;
  let fixture: ComponentFixture<ISNIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ISNIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
