import { TestBed } from '@angular/core/testing';

import { SingleProductService } from './single-product.service';

describe('SingleProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleProductService = TestBed.get(SingleProductService);
    expect(service).toBeTruthy();
  });
});
