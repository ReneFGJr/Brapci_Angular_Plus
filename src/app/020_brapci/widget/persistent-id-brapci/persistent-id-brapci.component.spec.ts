import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentIdBrapciComponent } from './persistent-id-brapci.component';

describe('PersistentIdBrapciComponent', () => {
  let component: PersistentIdBrapciComponent;
  let fixture: ComponentFixture<PersistentIdBrapciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersistentIdBrapciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersistentIdBrapciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
