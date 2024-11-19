import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationNoteComponent } from './citation-note.component';

describe('CitationNoteComponent', () => {
  let component: CitationNoteComponent;
  let fixture: ComponentFixture<CitationNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitationNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
