import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfFormShowComponent } from './rdf-form-show.component';

describe('RdfFormShowComponent', () => {
  let component: RdfFormShowComponent;
  let fixture: ComponentFixture<RdfFormShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfFormShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfFormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
