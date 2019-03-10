import { TestBed } from '@angular/core/testing';

import { MessageToStaffService } from './message-to-staff.service';

describe('MessageToStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageToStaffService = TestBed.get(MessageToStaffService);
    expect(service).toBeTruthy();
  });
});
