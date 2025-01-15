import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaisMenuComponent } from './editais-menu.component';

describe('EditaisMenuComponent', () => {
  let component: EditaisMenuComponent;
  let fixture: ComponentFixture<EditaisMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaisMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
