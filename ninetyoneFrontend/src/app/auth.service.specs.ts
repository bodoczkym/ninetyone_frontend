import { TestBed } from '@angular/core/testing';
import { AuthService2 } from './auth.service';

describe('AuthService2', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService2 = TestBed.get(AuthService2);
    expect(service).toBeTruthy();
  });
});
