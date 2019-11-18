import { TestBed } from '@angular/core/testing';

import { BancaservicoService } from './bancaservico.service';

describe('BancaservicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BancaservicoService = TestBed.get(BancaservicoService);
    expect(service).toBeTruthy();
  });
});
