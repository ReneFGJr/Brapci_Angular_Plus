import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPainelSearchComponent } from './dashboard-painel-search.component';

describe('DashboardPainelSearchComponent', () => {
  let component: DashboardPainelSearchComponent;
  let fixture: ComponentFixture<DashboardPainelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPainelSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPainelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
