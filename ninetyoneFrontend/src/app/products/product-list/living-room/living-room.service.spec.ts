import { TestBed } from '@angular/core/testing';

import { LivingRoomService } from './living-room.service';

describe('LivingRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivingRoomService = TestBed.get(LivingRoomService);
    expect(service).toBeTruthy();
  });
});
