import { TestBed } from '@angular/core/testing';

import { ColorChangeService } from './color-change.service';

describe('ColorChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorChangeService = TestBed.get(ColorChangeService);
    expect(service).toBeTruthy();
  });
});
