import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisclaimerComponent } from './book-disclaimer.component';

describe('BookDisclaimerComponent', () => {
  let component: BookDisclaimerComponent;
  let fixture: ComponentFixture<BookDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDisclaimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
