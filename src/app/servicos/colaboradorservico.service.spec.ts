import { TestBed } from '@angular/core/testing';

import { ColaboradorservicoService } from './colaboradorservico.service';

describe('ColaboradorservicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColaboradorservicoService = TestBed.get(ColaboradorservicoService);
    expect(service).toBeTruthy();
  });
});
