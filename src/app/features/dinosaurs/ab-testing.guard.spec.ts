import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { abTestingGuard } from './ab-testing.guard';

describe('abTestingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => abTestingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
