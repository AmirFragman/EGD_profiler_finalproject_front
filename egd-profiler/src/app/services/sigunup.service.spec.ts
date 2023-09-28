import { TestBed } from '@angular/core/testing';

import { SigunupService } from './sigunup.service';

describe('SigunupService', () => {
  let service: SigunupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigunupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
