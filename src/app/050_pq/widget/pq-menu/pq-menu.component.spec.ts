import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqMenuComponent } from './pq-menu.component';

describe('PqMenuComponent', () => {
  let component: PqMenuComponent;
  let fixture: ComponentFixture<PqMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PqMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
