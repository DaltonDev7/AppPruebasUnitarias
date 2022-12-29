import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaRoversComponent } from './nasa-rovers.component';

describe('NasaRoversComponent', () => {
  let component: NasaRoversComponent;
  let fixture: ComponentFixture<NasaRoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaRoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaRoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
