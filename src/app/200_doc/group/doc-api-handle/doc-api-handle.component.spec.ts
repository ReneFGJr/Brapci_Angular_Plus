import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApiHandleComponent } from './doc-api-handle.component';

describe('DocApiHandleComponent', () => {
  let component: DocApiHandleComponent;
  let fixture: ComponentFixture<DocApiHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApiHandleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocApiHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
