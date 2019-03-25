import { TestBed } from '@angular/core/testing';

import { BathroomService } from './bathroom.service';

describe('BathroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BathroomService = TestBed.get(BathroomService);
    expect(service).toBeTruthy();
  });
});
