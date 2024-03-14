import { TestBed } from '@angular/core/testing';

import { HandlePasswordService } from './handle-password.service';

describe('HandlePasswordService', () => {
  let service: HandlePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
