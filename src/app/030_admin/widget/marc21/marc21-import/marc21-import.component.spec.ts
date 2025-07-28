import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marc21ImportComponent } from './marc21-import.component';

describe('Marc21ImportComponent', () => {
  let component: Marc21ImportComponent;
  let fixture: ComponentFixture<Marc21ImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Marc21ImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marc21ImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
