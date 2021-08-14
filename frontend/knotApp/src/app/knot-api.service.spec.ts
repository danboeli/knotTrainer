import { TestBed } from '@angular/core/testing';

import { KnotApiService } from './knot-api.service';

describe('KnotApiService', () => {
  let service: KnotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
