import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApiBrapciComponent } from './doc-api-brapci.component';

describe('DocApiBrapciComponent', () => {
  let component: DocApiBrapciComponent;
  let fixture: ComponentFixture<DocApiBrapciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApiBrapciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocApiBrapciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
