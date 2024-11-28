import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalIcrProducaoAnoComponent } from './journal-icr-producao-ano.component';

describe('JournalIcrProducaoAnoComponent', () => {
  let component: JournalIcrProducaoAnoComponent;
  let fixture: ComponentFixture<JournalIcrProducaoAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JournalIcrProducaoAnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalIcrProducaoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
