import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCanceledComponent } from './view-canceled.component';

describe('ViewCanceledComponent', () => {
  let component: ViewCanceledComponent;
  let fixture: ComponentFixture<ViewCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCanceledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
