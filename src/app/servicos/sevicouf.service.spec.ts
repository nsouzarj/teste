import { TestBed } from '@angular/core/testing';

import { SevicoufService } from './sevicouf.service';

describe('SevicoufService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SevicoufService = TestBed.get(SevicoufService);
    expect(service).toBeTruthy();
  });
});
