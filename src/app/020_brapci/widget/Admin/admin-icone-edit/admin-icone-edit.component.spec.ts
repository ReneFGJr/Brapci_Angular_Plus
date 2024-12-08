import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIconeEditComponent } from './admin-icone-edit.component';

describe('AdminIconeEditComponent', () => {
  let component: AdminIconeEditComponent;
  let fixture: ComponentFixture<AdminIconeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminIconeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIconeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
