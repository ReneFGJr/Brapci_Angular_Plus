import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminVComponent } from './main-admin-v.component';

describe('MainAdminVComponent', () => {
  let component: MainAdminVComponent;
  let fixture: ComponentFixture<MainAdminVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainAdminVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdminVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
