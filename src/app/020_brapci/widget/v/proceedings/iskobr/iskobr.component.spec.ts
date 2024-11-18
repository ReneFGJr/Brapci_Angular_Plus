import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskobrComponent } from './iskobr.component';

describe('IskobrComponent', () => {
  let component: IskobrComponent;
  let fixture: ComponentFixture<IskobrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IskobrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IskobrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
