import { TestBed } from '@angular/core/testing';

import { NbaServiceService } from './nba-service.service';

describe('NbaServiceService', () => {
  let service: NbaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
