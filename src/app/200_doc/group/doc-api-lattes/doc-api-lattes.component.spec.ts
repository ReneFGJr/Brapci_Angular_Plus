import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApiLattesComponent } from './doc-api-lattes.component';

describe('DocApiLattesComponent', () => {
  let component: DocApiLattesComponent;
  let fixture: ComponentFixture<DocApiLattesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApiLattesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocApiLattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
