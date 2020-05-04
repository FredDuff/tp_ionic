import { TestBed } from '@angular/core/testing';

import { TwFiltersService } from './twFilters.service';

describe('TwFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwFiltersService = TestBed.get(TwFiltersService);
    expect(service).toBeTruthy();
  });
});
