import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIconeIaComponent } from './admin-icone-ia.component';

describe('AdminIconeIaComponent', () => {
  let component: AdminIconeIaComponent;
  let fixture: ComponentFixture<AdminIconeIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminIconeIaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIconeIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
