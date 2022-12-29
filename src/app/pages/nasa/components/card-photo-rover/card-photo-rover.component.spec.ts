import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotoRoverComponent } from './card-photo-rover.component';

describe('CardPhotoRoverComponent', () => {
  let component: CardPhotoRoverComponent;
  let fixture: ComponentFixture<CardPhotoRoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPhotoRoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPhotoRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
