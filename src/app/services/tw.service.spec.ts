import { TestBed } from '@angular/core/testing';

import { TwService } from './tw.service';

describe('TwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwService = TestBed.get(TwService);
    expect(service).toBeTruthy();
  });
});
