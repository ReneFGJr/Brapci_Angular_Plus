import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormPdfComponent } from './rdf-form-pdf.component';

describe('RdfFormPdfComponent', () => {
  let component: RdfFormPdfComponent;
  let fixture: ComponentFixture<RdfFormPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
