import { TestBed } from '@angular/core/testing';

import { GurdService } from './gurd.service';

describe('GurdService', () => {
  let service: GurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
