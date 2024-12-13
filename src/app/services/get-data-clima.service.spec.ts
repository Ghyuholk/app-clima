import { TestBed } from '@angular/core/testing';

import { GetDataClimaService } from './get-data-clima.service';

describe('GetDataClimaService', () => {
  let service: GetDataClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
