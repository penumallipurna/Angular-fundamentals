import { TestBed } from '@angular/core/testing';

import { CountingService } from './counting.service';

describe('CountingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountingService = TestBed.get(CountingService);
    expect(service).toBeTruthy();
  });
});
