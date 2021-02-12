import { TestBed } from '@angular/core/testing';

import { UserfileService } from './userfile.service';

describe('UserfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfileService = TestBed.get(UserfileService);
    expect(service).toBeTruthy();
  });
});
