import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePhotoComponent } from './face-photo.component';

describe('FacePhotoComponent', () => {
  let component: FacePhotoComponent;
  let fixture: ComponentFixture<FacePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacePhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
