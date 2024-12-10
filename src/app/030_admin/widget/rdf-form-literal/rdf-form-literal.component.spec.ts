import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormLiteralComponent } from './rdf-form-literal.component';

describe('RdfFormLiteralComponent', () => {
  let component: RdfFormLiteralComponent;
  let fixture: ComponentFixture<RdfFormLiteralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormLiteralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormLiteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
