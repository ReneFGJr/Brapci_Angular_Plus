import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfConceptComponent } from './rdf-concept.component';

describe('RdfConceptComponent', () => {
  let component: RdfConceptComponent;
  let fixture: ComponentFixture<RdfConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
