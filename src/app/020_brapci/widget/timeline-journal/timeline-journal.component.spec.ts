import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineJournalComponent } from './timeline-journal.component';

describe('TimelineJournalComponent', () => {
  let component: TimelineJournalComponent;
  let fixture: ComponentFixture<TimelineJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
