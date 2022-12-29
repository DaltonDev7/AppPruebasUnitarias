import { TestBed } from '@angular/core/testing';

import { NasaResolver } from './nasa.resolver';

describe('NasaResolver', () => {
  let resolver: NasaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NasaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
