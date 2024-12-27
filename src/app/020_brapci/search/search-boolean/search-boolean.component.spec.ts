import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooleanComponent } from './search-boolean.component';

describe('SearchBooleanComponent', () => {
  let component: SearchBooleanComponent;
  let fixture: ComponentFixture<SearchBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBooleanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
