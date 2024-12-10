import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormConceptComponent } from './rdf-form-concept.component';

describe('RdfFormConceptComponent', () => {
  let component: RdfFormConceptComponent;
  let fixture: ComponentFixture<RdfFormConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
