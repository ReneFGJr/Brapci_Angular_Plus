import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqPerfilComponent } from './pq-perfil.component';

describe('PqPerfilComponent', () => {
  let component: PqPerfilComponent;
  let fixture: ComponentFixture<PqPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PqPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
