import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormImagemComponent } from './rdf-form-imagem.component';

describe('RdfFormImagemComponent', () => {
  let component: RdfFormImagemComponent;
  let fixture: ComponentFixture<RdfFormImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormImagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
