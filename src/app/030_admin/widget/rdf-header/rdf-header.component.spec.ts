import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfHeaderComponent } from './rdf-header.component';

describe('RdfHeaderComponent', () => {
  let component: RdfHeaderComponent;
  let fixture: ComponentFixture<RdfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdfHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
