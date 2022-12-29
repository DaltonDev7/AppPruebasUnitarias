import { TestBed } from '@angular/core/testing';

import { RoverCameraResolver } from './rover-camera.resolver';

describe('RoverCameraResolver', () => {
  let resolver: RoverCameraResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RoverCameraResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
