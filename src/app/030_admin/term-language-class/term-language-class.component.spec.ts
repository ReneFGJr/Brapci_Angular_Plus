import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLanguageClassComponent } from './term-language-class.component';

describe('TermLanguageClassComponent', () => {
  let component: TermLanguageClassComponent;
  let fixture: ComponentFixture<TermLanguageClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermLanguageClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermLanguageClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
