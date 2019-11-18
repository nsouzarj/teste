import { TestBed } from '@angular/core/testing';

import { ComarcaservicoService } from './comarcaservico.service';

describe('ComarcaservicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComarcaservicoService = TestBed.get(ComarcaservicoService);
    expect(service).toBeTruthy();
  });
});
