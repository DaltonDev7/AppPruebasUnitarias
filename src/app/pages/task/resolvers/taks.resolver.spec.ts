import { TestBed } from '@angular/core/testing';

import { TaksResolver } from './taks.resolver';

describe('TaksResolver', () => {
  let resolver: TaksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TaksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
