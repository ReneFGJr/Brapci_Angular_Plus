import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBradfordComponent } from './research-bradford.component';

describe('ResearchBradfordComponent', () => {
  let component: ResearchBradfordComponent;
  let fixture: ComponentFixture<ResearchBradfordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchBradfordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchBradfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
