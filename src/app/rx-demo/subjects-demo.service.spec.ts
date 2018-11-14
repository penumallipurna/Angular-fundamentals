import { TestBed } from '@angular/core/testing';

import { SubjectsDemoService } from './subjects-demo.service';

describe('SubjectsDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectsDemoService = TestBed.get(SubjectsDemoService);
    expect(service).toBeTruthy();
  });
});
