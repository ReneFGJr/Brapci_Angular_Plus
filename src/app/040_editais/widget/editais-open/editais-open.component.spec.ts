import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaisOpenComponent } from './editais-open.component';

describe('EditaisOpenComponent', () => {
  let component: EditaisOpenComponent;
  let fixture: ComponentFixture<EditaisOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaisOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaisOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
