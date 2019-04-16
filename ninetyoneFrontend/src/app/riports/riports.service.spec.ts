import { TestBed } from '@angular/core/testing';

import { RiportsService } from './riports.service';

describe('RiportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiportsService = TestBed.get(RiportsService);
    expect(service).toBeTruthy();
  });
});
