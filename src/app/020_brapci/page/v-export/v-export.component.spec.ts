import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VExportComponent } from './v-export.component';

describe('VExportComponent', () => {
  let component: VExportComponent;
  let fixture: ComponentFixture<VExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
