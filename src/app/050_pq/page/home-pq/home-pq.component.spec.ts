import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePqComponent } from './home-pq.component';

describe('HomePqComponent', () => {
  let component: HomePqComponent;
  let fixture: ComponentFixture<HomePqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
