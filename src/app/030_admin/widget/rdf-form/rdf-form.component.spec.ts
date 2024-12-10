import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormComponent } from './rdf-form.component';

describe('RdfFormComponent', () => {
  let component: RdfFormComponent;
  let fixture: ComponentFixture<RdfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
