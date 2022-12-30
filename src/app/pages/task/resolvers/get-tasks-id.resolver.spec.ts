import { TestBed } from '@angular/core/testing';

import { GetTasksIdResolver } from './get-tasks-id.resolver';

describe('GetTasksIdResolver', () => {
  let resolver: GetTasksIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetTasksIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
