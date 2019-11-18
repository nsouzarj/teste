import { TestBed } from '@angular/core/testing';

import { ServicosolicitacaoService } from './servicosolicitacao.service';

describe('ServicosolicitacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicosolicitacaoService = TestBed.get(ServicosolicitacaoService);
    expect(service).toBeTruthy();
  });
});
